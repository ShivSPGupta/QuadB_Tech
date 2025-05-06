import React, { useState } from "react";
import RangeSlider from "./RangeSlider";

const ContactForm = () => {
  const [selectedService, setSelectedService] = useState("Web Design");
  const [budgetRange, setBudgetRange] = useState([1000, 5000]);

  return (
    <form className="flex flex-col justify-center p-16 w-full border border-solid border-[color:var(--Grey-15,#262626)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-center px-8 py-5 rounded-md border border-solid basis-0 bg-neutral-800 bg-opacity-50 border-[color:var(--Grey-15,#262626)] min-w-60 max-md:px-5">
          <label className="text-lg font-medium text-white" htmlFor="fullName">
            Full Name
          </label>
          <div className="flex flex-col justify-center mt-4 w-full text-base text-stone-500">
            <input
              type="text"
              id="fullName"
              placeholder="Type here"
              className="bg-transparent text-stone-500 outline-none"
            />
            <div className="mt-1.5 w-full border border-solid bg-zinc-800 border-zinc-800 min-h-px" />
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink justify-center px-8 py-5 rounded-md border border-solid basis-0 bg-neutral-800 bg-opacity-50 border-[color:var(--Grey-15,#262626)] min-w-60 max-md:px-5">
          <label className="text-lg font-medium text-white" htmlFor="email">
            Email
          </label>
          <div className="flex flex-col justify-center mt-4 w-full text-base text-stone-500">
            <input
              type="email"
              id="email"
              placeholder="Type here"
              className="bg-transparent text-stone-500 outline-none"
            />
            <div className="mt-1.5 w-full border border-solid bg-zinc-800 border-zinc-800 min-h-px" />
          </div>
        </div>
      </div>

      <div className="p-8 mt-8 w-full rounded-lg border border-solid bg-neutral-800 bg-opacity-50 border-[color:var(--Grey-15,#262626)] max-md:px-5 max-md:max-w-full">
        <h3 className="text-lg font-medium text-white max-md:max-w-full">
          Why are you contacting us?
        </h3>
        <div className="mt-8 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
            <div className="flex flex-1 shrink gap-2.5 items-center basis-0 min-w-60">
              <div
                className="flex gap-2.5 items-center self-stretch p-1 my-auto w-7 h-7 rounded border border-solid bg-neutral-800 border-[color:var(--Grey-20,#333)]"
                onClick={() => setSelectedService("Web Design")}
              >
                {selectedService === "Web Design" && (
                  <img
                    src="https://shivshankar1201.sirv.com/digital-agency/Home/ContactForm/Selected.svg"
                    alt="Selected"
                    className="object-contain self-stretch my-auto w-5 rounded aspect-square"
                  />
                )}
              </div>
              <label className="flex-1 shrink self-stretch my-auto text-base text-white basis-0">
                Web Design
              </label>
            </div>
            <div className="flex flex-1 shrink gap-2.5 items-center text-base text-white whitespace-nowrap basis-0 min-w-60">
              <div
                className="flex gap-2.5 self-stretch py-1 my-auto w-7 h-7 rounded border border-solid bg-neutral-800 border-[color:var(--Grey-20,#333)] min-h-7"
                onClick={() => setSelectedService("Collaboration")}
              >
                {selectedService === "Collaboration" && (
                  <img
                    src="https://shivshankar1201.sirv.com/digital-agency/Home/ContactForm/Selected.svg"
                    alt="Selected"
                    className="object-contain self-stretch my-auto w-5 rounded aspect-square"
                  />
                )}
              </div>
              <label className="flex-1 shrink self-stretch my-auto text-white basis-0">
                Collaboration
              </label>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 items-start mt-6 w-full text-base text-white max-md:max-w-full">
            <div className="flex flex-1 shrink gap-2.5 items-center basis-0 min-w-60">
              <div
                className="flex gap-2.5 self-stretch py-1 my-auto w-7 h-7 rounded border border-solid bg-neutral-800 border-[color:var(--Grey-20,#333)] min-h-7"
                onClick={() => setSelectedService("Mobile App Design")}
              >
                {selectedService === "Mobile App Design" && (
                  <img
                    src="https://shivshankar1201.sirv.com/digital-agency/Home/ContactForm/Selected.svg"
                    alt="Selected"
                    className="object-contain self-stretch my-auto w-5 rounded aspect-square"
                  />
                )}
              </div>
              <label className="flex-1 shrink self-stretch my-auto text-white basis-0">
                Mobile App Design
              </label>
            </div>
            <div className="flex flex-1 shrink gap-2.5 items-center whitespace-nowrap basis-0 min-w-60">
              <div
                className="flex gap-2.5 self-stretch py-1 my-auto w-7 h-7 rounded border border-solid bg-neutral-800 border-[color:var(--Grey-20,#333)] min-h-7"
                onClick={() => setSelectedService("Others")}
              >
                {selectedService === "Others" && (
                  <img
                    src="https://shivshankar1201.sirv.com/digital-agency/Home/ContactForm/Selected.svg"
                    alt="Selected"
                    className="object-contain self-stretch my-auto w-5 rounded aspect-square"
                  />
                )}
              </div>
              <label className="flex-1 shrink self-stretch my-auto text-white basis-0">
                Others
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 mt-8 w-full rounded-lg border border-solid bg-neutral-800 bg-opacity-50 border-[color:var(--Grey-15,#262626)] max-md:px-5 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h3 className="text-lg font-medium text-white max-md:max-w-full">
            Your Budget
          </h3>
          <p className="mt-3.5 text-base tracking-normal text-neutral-200 max-md:max-w-full">
            Slide to indicate your budget range
          </p>
        </div>
        <RangeSlider
          initialRange={budgetRange}
          onChange={(newRange) => setBudgetRange(newRange)}
        />
      </div>

      <div className="flex flex-col justify-center px-8 py-5 mt-8 w-full rounded-md border border-solid bg-neutral-800 bg-opacity-50 border-[color:var(--Grey-15,#262626)] max-md:px-5 max-md:max-w-full">
        <label className="text-lg font-medium text-white max-md:max-w-full" htmlFor="message">
          Your Message
        </label>
        <div className="flex flex-col justify-center mt-5 w-full text-base text-stone-500 max-md:max-w-full">
          <div className="flex flex-col justify-center w-full max-md:max-w-full">
            <textarea
              id="message"
              placeholder="Type here"
              className="bg-transparent text-stone-500 outline-none resize-none h-20"
            ></textarea>
            <div className="mt-1.5 w-full border border-solid bg-zinc-800 border-zinc-800 min-h-px max-md:max-w-full" />
          </div>
          <div className="mt-9 w-full border border-solid bg-zinc-800 border-zinc-800 min-h-px max-md:max-w-full" />
        </div>
      </div>

      <button type="submit" className="gap-2 self-center px-9 py-3.5 mt-8 text-sm font-medium whitespace-nowrap bg-lime-400 rounded-md text-zinc-900 max-md:px-5">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;