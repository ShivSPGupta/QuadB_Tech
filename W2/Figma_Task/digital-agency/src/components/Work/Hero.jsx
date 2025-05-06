import React from "react";

const Hero = () => {
  return (
    <div className="flex overflow-hidden relative flex-col px-6 sm:px-12 md:px-24 lg:px-64 py-12 sm:py-16 md:py-24 w-full text-center max-w-[1282px] min-h-[250px] sm:min-h-[312px]">
      <img
        src="https://shivshankar1201.sirv.com/digital-agency/Work/Hero/Hero%20Background.png"
        className="object-cover absolute inset-0 size-full"
        alt="Hero background"
      />
      <div className="relative text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
        Our Works
      </div>
      <div className="relative mt-2.5 text-base sm:text-lg tracking-normal leading-6 sm:leading-7 text-neutral-200">
        Discover a portfolio of visually stunning and strategically crafted
        digital projects that showcase our creativity and expertise.
      </div>
    </div>
  );
};

export default Hero;