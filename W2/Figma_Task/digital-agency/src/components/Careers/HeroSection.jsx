import React from "react";

function HeroSection() {
  return (
    <section className="flex overflow-hidden relative flex-col px-64 py-24 w-full text-center max-w-[1282px] min-h-[282px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://shivshankar1201.sirv.com/digital-agency/Careers/HeroSection/Careers%20Hero%20Background.png"
        alt="Careers Hero Background"
        className="object-cover absolute inset-0 size-full"
      />
      <h1 className="relative text-4xl font-semibold text-white max-md:max-w-full">
        Join Our Team at SquareUp
      </h1>
      <p className="relative mt-2.5 text-lg tracking-normal leading-none text-neutral-200 max-md:max-w-full">
        Unlock your potential and join our team of innovators and problem
        solvers.
      </p>
    </section>
  );
}

export default HeroSection;
