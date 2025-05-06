import React from "react";
import FeatureCard from "./FeatureCard";

const WhyChooseUsSection = () => {
  return (
    <section id="about" className="w-full border border-solid border-[color:var(--Grey-15,#262626)] max-w-[1279px]">
      <div className="flex relative flex-col px-6 sm:px-12 md:px-24 lg:px-64 py-16 sm:py-20 md:py-24 w-full text-center min-h-[200px] sm:min-h-[240px] md:min-h-[304px]">
        <img
          src="https://shivshankar1201.sirv.com/digital-agency/Home/WhyChooseUsSection/Why%20Choose%20us%20Background.png"
          alt="Why Choose Us Background"
          className="object-cover absolute inset-0 size-full"
        />
        <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          Why Choose SquareUp?
        </h2>
        <p className="relative mt-2.5 text-base tracking-normal leading-6 text-neutral-200">
          Experience excellence in digital craftsmanship with our team of
          skilled professionals dedicated to delivering exceptional results.
        </p>
      </div>
      <div className="w-full border-t border-solid border-t-[color:var(--Grey-15,#262626)]">
        <div className="flex flex-col md:flex-row items-start w-full">
          <FeatureCard
            icon="https://shivshankar1201.sirv.com/digital-agency/Home/WhyChooseUsSection/Expertise.svg"
            title="Expertise"
            description="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
          />

          {/* Divider - horizontal on mobile, vertical on desktop */}
          <div className="h-px md:h-[292px] w-full md:w-0 border border-solid bg-neutral-800 border-neutral-800" />

          <FeatureCard
            icon="https://shivshankar1201.sirv.com/digital-agency/Home/WhyChooseUsSection/Client-Centric%20Approach.svg"
            title="Client-Centric Approach"
            description="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
          />
        </div>
        <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
        <div className="flex flex-col md:flex-row items-start w-full">
          <FeatureCard
            icon="https://shivshankar1201.sirv.com/digital-agency/Home/WhyChooseUsSection/Results-Driven%20Solutions.svg"
            title="Results-Driven Solutions"
            description="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
          />

          {/* Divider - horizontal on mobile, vertical on desktop */}
          <div className="h-px md:h-[292px] w-full md:w-0 border border-solid bg-neutral-800 border-neutral-800" />

          <FeatureCard
            icon="https://shivshankar1201.sirv.com/digital-agency/Home/WhyChooseUsSection/Collaborative%20Partnership.svg"
            title="Collaborative Partnership"
            description="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;