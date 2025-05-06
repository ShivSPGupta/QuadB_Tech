import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex overflow-hidden relative flex-col pt-16 sm:pt-20 md:pt-24 lg:pt-28 w-full border-r border-b border-l border-solid border-b-[color:var(--Grey-15,#262626)] border-l-[color:var(--Grey-15,#262626)] border-r-[color:var(--Grey-15,#262626)] max-w-[1282px] min-h-[500px] sm:min-h-[600px] md:min-h-[692px]">
      <img
        src="https://shivshankar1201.sirv.com/digital-agency/Home/HeroSection/Background.png"
        alt="Background"
        className="object-cover absolute inset-0 size-full"
      />
       <img
    src="https://shivshankar1201.sirv.com/digital-agency/Home/HeroSection/Abstract%20Design.svg"
    alt="Overlay"
    className="absolute bottom-0 left-0 w-full object-cover"
  />
      <div className="flex relative flex-col w-full px-4 sm:px-6 md:px-8">
        <div className="flex flex-col w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-white">
            A Digital Product Studio
            <br />
            that will Work
          </h1>
          <div className="flex flex-wrap gap-1.5 items-center justify-center self-center px-4 sm:px-6 md:px-8 py-4 sm:py-5 mt-6 sm:mt-8 text-base sm:text-lg rounded-lg border border-solid backdrop-blur-[6px] bg-neutral-800 bg-opacity-20 border-[color:var(--Grey-15,#262626)] text-neutral-400">
            <p className="self-stretch my-auto">
              For
            </p>
            <span className="gap-2.5 self-stretch px-2.5 py-2 my-auto text-white whitespace-nowrap rounded-md bg-neutral-800">
              Startups
            </span>
            <p className="self-stretch my-auto">
              ,
            </p>
            <span className="gap-2.5 self-stretch px-2.5 py-2 my-auto text-white rounded-md bg-neutral-800">
              Enterprise leaders
            </span>
            <p className="self-stretch my-auto">
              ,
            </p>
            <span className="gap-2.5 self-stretch px-2.5 py-2 my-auto text-white rounded-md bg-neutral-800">
              Media & Publishers
            </span>
            <p className="self-stretch my-auto">
              and
            </p>
            <span className="gap-2.5 self-stretch px-2.5 py-2 my-auto text-white rounded-md bg-neutral-800">
              Social Good
            </span>
          </div>
        </div>
        <div className="flex gap-3.5 items-center justify-center flex-wrap sm:flex-nowrap self-center mt-8 sm:mt-10 text-sm font-medium">
          <button className="gap-2.5 self-stretch px-5 py-3.5 text-white rounded-lg border border-solid backdrop-blur-[6px] bg-neutral-800 bg-opacity-20 border-[color:var(--Grey-20,#333)] w-full sm:w-auto">
            <Link to="/work">Our Works</Link>
          </button>
          <button className="gap-2.5 self-stretch px-5 py-3.5 bg-lime-400 rounded-lg text-neutral-800 w-full sm:w-auto mt-3 sm:mt-0">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
      <div className="flex relative w-full min-h-[200px] sm:min-h-[300px] md:min-h-[448px]" />
    </section>
  );
};

export default HeroSection;