import React, { useRef, useEffect } from 'react';
import './ScrollPathSection.css';

const ScrollPathSection = () => {
  const pathRef = useRef(null);
  const ballRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const path = pathRef.current;
      const svg = svgRef.current;

      if (!path || !svg) return;

      const svgRect = svg.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const svgOffsetTop = scrollTop + svgRect.top;
      const totalScroll = svgRect.height;

      const scrollRatio = Math.min(Math.max((scrollTop + window.innerHeight / 2 - svgOffsetTop) / totalScroll, 0), 1);

      const pathLength = path.getTotalLength();
      const point = path.getPointAtLength(pathLength * scrollRatio);

      if (ballRef.current) {
        ballRef.current.setAttribute("cx", point.x);
        ballRef.current.setAttribute("cy", point.y);
      }
    };

    const handleFade = () => {
      const fadeSections = document.querySelectorAll('.fade-section');
      fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleFade);
    handleScroll();
    handleFade();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleFade);
    };
  }, []);

  return (
    <section className="scroll-path-section">
      <h2 className="text-xl text-center text-white italic px-4 md:px-0 max-w-4xl mx-auto mb-8">
        We are creative designers, developers and marketers from India driven by a common purpose to inspire, create and launch ground-breaking ideas.
      </h2>
      <h3 className="text-center text-white text-lg font-medium mb-4">
        We love taking your vision to reality. Here's how we work:
      </h3>

      <div className="scroll-path-wrapper relative">
        <svg ref={svgRef} viewBox="0 0 1000 1400" className="scroll-svg" preserveAspectRatio="none">
          <path
            ref={pathRef}
            d="M 200 100 H 800 L 850 150 V 300 H 200 L 150 350 V 500 H 800 L 850 550 V 700 H 200 L 150 750 V 900 H 800"
            fill="transparent"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            ref={ballRef}
            r="10"
            fill="url(#grad)"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a3e635" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>

        <div className="scroll-content absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-xl">
          <div className="fade-section absolute top-[250px]">
            <h4 className="text-xl font-semibold text-white">We find the Creatives, so you don't have to</h4>
            <p className="text-sm mt-2 text-white">Quadt Tech’s experience determines the right creative direction based on your company’s positioning.</p>
          </div>
          <div className="fade-section absolute top-[600px]">
            <h4 className="text-xl font-semibold text-white">Data-Driven Creativity</h4>
            <p className="text-sm mt-2 text-white">We combine innovation with analytics to ensure your brand always leads with insight.</p>
          </div>
          <div className="fade-section absolute top-[950px]">
            <h4 className="text-xl font-semibold text-white">Collaboration for Success</h4>
            <p className="text-sm mt-2 text-white">Working hand-in-hand with clients, we bring ideas to life through strategy, design, and execution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollPathSection;
