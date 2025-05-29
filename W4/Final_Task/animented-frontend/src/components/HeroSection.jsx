import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section relative h-screen w-full text-white flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Gradient Blur Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="blur-circle top-1/4 left-1/3" />
        <div className="blur-circle alt top-2/3 right-1/4" />
      </div>

      {/* Hero Content */}
      <div className="z-10 text-center px-4">
        <h2 className="text-3xl italic text-gray-300 heading-underline">
          Come to us with a {" "}
          <span className="gradient-text font-semibold">vision</span>
        </h2>

        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          Embrace the Quest
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We build digital product, from idea to design, development to
          marketing & PR to post launch support
        </p>
        <div className="gradient-border mt-6">
          <button className="inner">GET FREE CONSULTATION</button>
        </div>
      </div>

      {/* Scrolling Text Strip */}
      <div className="scroll-strip absolute bottom-0 w-full overflow-hidden border-t border-gray-600">
        <div className="scroll-track">
          <div className="scroll-content">
            {Array(40)
              .fill("◀︎ ▶︎ Web Development ◀︎ ▶︎")
              .map((item, i) => (
                <span className="mx-6" key={i}>
                  {item}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
