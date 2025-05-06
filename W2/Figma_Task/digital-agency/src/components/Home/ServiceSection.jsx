import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section id="services" className="w-full max-w-screen-xl border border-solid border-[color:var(--Grey-15,#262626)]">
      <div className="flex relative flex-col px-6 sm:px-12 md:px-24 lg:px-64 py-16 sm:py-20 md:py-24 w-full text-center min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
        <img
          src="https://shivshankar1201.sirv.com/digital-agency/Home/ServiceSection/Services%20Background.png"
          alt="Services Background"
          className="object-cover absolute inset-0 size-full"
        />
        <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          Our Services
        </h2>
        <p className="relative mt-2.5 text-base tracking-normal text-neutral-200">
          Transform your brand with our innovative digital solutions that
          captivate and engage your audience.
        </p>
      </div>
      <div className="flex flex-wrap w-full border-t border-solid border-t-[color:var(--Grey-15,#262626)]">
        {/* On mobile, stack the cards */}
        <div className="flex flex-col md:flex-row w-full">
          <ServiceCard
            icon="https://shivshankar1201.sirv.com/digital-agency/Home/ServiceSection/Design.svg"
            title="Design"
            description="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
          />

          {/* Divider - horizontal on mobile, vertical on desktop */}
          <div className="h-px md:h-[510px] w-full md:w-0 border border-solid bg-neutral-800 border-neutral-800" />

          <ServiceCard
            icon="https://shivshankar1201.sirv.com/digital-agency/Home/ServiceSection/Engineering.svg"
            title="Engineering"
            description="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
          />

          {/* Divider - horizontal on mobile, vertical on desktop */}
          <div className="h-px md:h-[510px] w-full md:w-0 border border-solid bg-neutral-800 border-neutral-800" />

          <ServiceCard
            icon="https://shivshankar1201.sirv.com/digital-agency/Home/ServiceSection/Project%20Management.svg"
            title="Project Management"
            description="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;