import React from "react";

function HeroSection() {
  return (
    <section className="flex overflow-hidden relative flex-col px-64 py-24 w-full text-center max-w-[1282px] min-h-[282px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://shivshankar1201.sirv.com/digital-agency/Process/HeroSection/Background.png"
        className="object-cover absolute inset-0 size-full"
        alt="Background"
      />
      <h1 className="relative text-4xl font-semibold text-white max-md:max-w-full">
        Process of Starting the Project
      </h1>
      <p className="relative mt-2.5 text-lg tracking-normal leading-none text-neutral-200 max-md:max-w-full">
        At SquareUp, we value transparency, collaboration, and delivering
        exceptional results.
      </p>
    </section>
  );
}

export default HeroSection;