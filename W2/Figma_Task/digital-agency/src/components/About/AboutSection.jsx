import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-wrap gap-10 items-center px-24 py-20 w-full max-w-screen-xl border border-solid border-[color:var(--Grey-15,#262626)] max-md:px-5 max-md:max-w-full">
      <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
        <h2 className="text-4xl font-semibold text-white max-md:max-w-full">
          About SquareUp
        </h2>
        <p className="mt-4 text-base tracking-normal leading-6 text-neutral-200 max-md:max-w-full">
          SquareUp is a digital product agency that is passionate about
          crafting exceptional digital experiences. We specialize in design,
          engineering, and project management, helping businesses thrive in
          the digital landscape. At SquareUp, we follow a structured and
          collaborative process to ensure the successful delivery of
          exceptional digital products. Our process combines industry best
          practices, creative thinking, and a client-centric approach.
        </p>
      </div>
      <div className="flex overflow-hidden relative flex-col flex-1 shrink justify-center items-start self-stretch my-auto basis-0 min-h-[483px] min-w-60 max-md:max-w-full">
        <img
          src="https://shivshankar1201.sirv.com/digital-agency/About/AboutSection/SquareUp%20Logo%20Background.png"
          alt="SquareUp Logo Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="absolute bottom-0 left-2/4 z-0 w-0 -translate-x-2/4 h-[241px] min-h-[241px] translate-y-[0%]" />
        <div className="absolute top-0 left-2/4 z-0 w-0 -translate-x-2/4 h-[237px] min-h-[237px] translate-y-[0%]" />
        <div className="absolute right-0 top-2/4 z-0 max-w-full h-0 min-h-0 -translate-y-2/4 translate-x-[0%] w-[245px]" />
        <div className="absolute left-0 top-2/4 z-0 max-w-full h-0 min-h-0 -translate-y-2/4 translate-x-[0%] w-[245px]" />
        <img
          src="https://shivshankar1201.sirv.com/digital-agency/About/AboutSection/SquareUp%20Logo.svg"
          alt="SquareUp Logo"
          className="object-contain z-0 self-center max-w-full shadow-sm aspect-square fill-lime-400 w-[100px]"
        />
      </div>
    </section>
  );
};

export default AboutSection;