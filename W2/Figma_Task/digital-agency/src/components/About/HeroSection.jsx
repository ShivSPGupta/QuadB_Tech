import React from "react";

const HeroSection = () => {
  return (
    <section className="flex overflow-hidden relative flex-col px-64 py-24 w-full text-center max-w-[1282px] min-h-[306px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://shivshankar1201.sirv.com/digital-agency/About/HeroSection/About%20Us%20Background.png"
        alt="About Us Background"
        className="object-cover absolute inset-0 size-full"
      />
      <h1 className="relative text-4xl font-semibold text-white max-md:max-w-full">
        About Us
      </h1>
      <p className="relative mt-2.5 text-lg tracking-normal leading-6 text-neutral-200 max-md:max-w-full">
        Welcome to SquareUp, where collaboration, expertise, and
        client-centricity intersect to shape the future of digital innovation.
      </p>
    </section>
  );
};

export default HeroSection;
