"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import RangeSlider from "./RangeSlider";

function ContactForm() {
  const [selectedOption, setSelectedOption] = useState("Web Design");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <form className="flex flex-col justify-center p-16 w-full border border-solid border-[#262626] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
        <InputField label="Full Name" placeholder="Type here" />
        <InputField label="Email" placeholder="Type here" />
      </div>

      <div className="p-8 mt-8 w-full rounded-lg border border-solid bg-neutral-800 bg-opacity-50 border-[#262626] max-md:px-5 max-md:max-w-full">
        <h3 className="text-lg font-medium text-white max-md:max-w-full">
          Why are you contacting us?
        </h3>
        <div className="mt-8 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
            <div className="flex flex-1 shrink gap-2.5 items-center basis-0 min-w-60">
              <div
                className="flex gap-2.5 items-center self-stretch p-1 my-auto w-7 h-7 rounded border border-solid bg-neutral-800 border-[#333]"
                onClick={() => handleOptionChange("Web Design")}
              >
                {selectedOption === "Web Design" && (
                  <img
                    src="https://shivshankar1201.sirv.com/digital-agency/Contact/ContactForm/Checkmark.svg"
                    alt="Checkmark"
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
                className="flex gap-2.5 self-stretch py-1 my-auto w-7 h-7 rounded border border-solid bg-neutral-800 border-[#333] min-h-7"
                onClick={() => handleOptionChange("Collaboration")}
              >
                {selectedOption === "Collaboration" && (
                  <img
                    src="https://shivshankar1201.sirv.com/digital-agency/Contact/ContactForm/Checkmark.svg"
                    alt="Checkmark"
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
                className="flex gap-2.5 self-stretch py-1 my-auto w-7 h-7 rounded border border-solid bg-neutral-800 border-[#333] min-h-7"
                onClick={() => handleOptionChange("Mobile App Design")}
              >
                {selectedOption === "Mobile App Design" && (
                  <img
                    src="https://shivshankar1201.sirv.com/digital-agency/Contact/ContactForm/Checkmark.svg"
                    alt="Checkmark"
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
                className="flex gap-2.5 self-stretch py-1 my-auto w-7 h-7 rounded border border-solid bg-neutral-800 border-[#333] min-h-7"
                onClick={() => handleOptionChange("Others")}
              >
                {selectedOption === "Others" && (
                  <img
                    src="https://shivshankar1201.sirv.com/digital-agency/Contact/ContactForm/Checkmark.svg"
                    alt="Checkmark"
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

      <div className="p-8 mt-8 w-full rounded-lg border border-solid bg-neutral-800 bg-opacity-50 border-[#262626] max-md:px-5 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h3 className="text-lg font-medium text-white max-md:max-w-full">
            Your Budget
          </h3>
          <p className="mt-3.5 text-base tracking-normal text-neutral-200 max-md:max-w-full">
            Slide to indicate your budget range
          </p>
        </div>
        <RangeSlider />
      </div>

      <div className="flex flex-col justify-center px-8 py-5 mt-8 w-full rounded-md border border-solid bg-neutral-800 bg-opacity-50 border-[#262626] max-md:px-5 max-md:max-w-full">
        <h3 className="text-lg font-medium text-white max-md:max-w-full">
          Your Message
        </h3>
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
}

export default ContactForm;