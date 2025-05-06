import React from "react";

function HeroSection() {
  return (
    <section className="flex overflow-hidden relative flex-col px-64 py-24 w-full text-center max-w-[1282px] min-h-[282px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://shivshankar1201.sirv.com/digital-agency/Services/HeroSection/Service%20Background.png"
        alt="Services Background"
        className="object-cover absolute inset-0 size-full"
      />
      <h1 className="relative text-4xl font-semibold text-white max-md:max-w-full">
        Our Services
      </h1>
      <p className="relative mt-2.5 text-lg tracking-normal leading-none text-neutral-200 max-md:max-w-full">
        Transform your brand with our innovative digital solutions that
        captivate and engage your audience.
      </p>
    </section>
  );
}

export default HeroSection;