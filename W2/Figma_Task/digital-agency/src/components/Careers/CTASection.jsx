import React from "react";

function CTASection() {
  return (
    <section className="flex flex-col justify-center p-16 w-full max-w-screen-xl border border-solid border-[color:var(--Grey-15,#262626)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-center w-full text-neutral-400 max-md:max-w-full">
        <img
          src="https://shivshankar1201.sirv.com/digital-agency/Careers/CTASection/SquareUp%20icon.svg"
          alt="SquareUp icon"
          className="object-contain shrink-0 self-stretch my-auto shadow-sm aspect-square fill-lime-400 w-[100px]"
        />
        <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
          <h2 className="text-2xl font-medium text-neutral-400 max-md:max-w-full">
            Today, SquareUp Continues to Thrive as a Leading Digital Product
            Agency.....
          </h2>
          <p className="mt-3.5 text-base leading-6 text-neutral-400 max-md:max-w-full">
            Combining the power of design, engineering, and project management
            to create transformative digital experiences. They invite you to
            join them on their journey and discover how they can help bring
            your digital ideas to life.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center px-8 py-5 mt-10 w-full rounded-xl border border-solid backdrop-blur-[6px] bg-neutral-800 bg-opacity-20 border-[color:var(--Grey-15,#262626)] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-3.5 items-center self-stretch my-auto basis-10 min-w-60 max-md:max-w-full">
          <h3 className="self-stretch my-auto text-lg text-neutral-400">
            Welcome to SquareUp
          </h3>
          <p className="gap-2.5 self-stretch px-3.5 py-2.5 my-auto text-base text-white rounded-md bg-neutral-800 min-w-60 max-md:max-w-full">
            Where collaboration, Expertise, and Client-Centricity Intersect to
            Shape the Future of Digital Innovation.
          </p>
        </div>
        <button className="gap-2 self-stretch px-5 py-3.5 my-auto text-sm font-medium bg-lime-400 rounded-md text-zinc-900">
          Start Project
        </button>
      </div>
    </section>
  );
}

export default CTASection;