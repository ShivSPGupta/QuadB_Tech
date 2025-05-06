"use client";
import React, { useState } from "react";
import CheckboxInput from "./CheckboxInput";
import RangeSlider from "./RangeSlider";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactReason, setContactReason] = useState({
    webDesign: true,
    collaboration: false,
    mobileAppDesign: false,
    others: false
  });

  const handleCheckboxChange = (name) => {
    setContactReason(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log({ name, email, message, contactReason });
  };

  return (
    <form
      className="flex flex-col justify-center p-16 w-full border border-solid border-[color:var(--Grey-15,#262626)] max-md:px-5 max-md:max-w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-center px-8 py-5 rounded-md border border-solid basis-0 bg-neutral-800 bg-opacity-50 border-[color:var(--Grey-15,#262626)] min-w-60 max-md:px-5">
          <label className="text-lg font-medium text-white" htmlFor="fullName">
            Full Name
          </label>
          <div className="flex flex-col justify-center mt-4 w-full text-base text-stone-500">
            <input
              id="fullName"
              type="text"
              placeholder="Type here"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              id="email"
              type="email"
              placeholder="Type here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <CheckboxInput
              label="Web Design"
              checked={contactReason.webDesign}
              onChange={() => handleCheckboxChange('webDesign')}
            />
            <CheckboxInput
              label="Collaboration"
              checked={contactReason.collaboration}
              onChange={() => handleCheckboxChange('collaboration')}
            />
          </div>
          <div className="flex flex-wrap gap-5 items-start mt-6 w-full text-base text-white max-md:max-w-full">
            <CheckboxInput
              label="Mobile App Design"
              checked={contactReason.mobileAppDesign}
              onChange={() => handleCheckboxChange('mobileAppDesign')}
            />
            <CheckboxInput
              label="Others"
              checked={contactReason.others}
              onChange={() => handleCheckboxChange('others')}
            />
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
        <RangeSlider />
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-transparent text-stone-500 outline-none resize-none"
              rows={2}
            />
            <div className="mt-1.5 w-full border border-solid bg-zinc-800 border-zinc-800 min-h-px max-md:max-w-full" />
          </div>
          <div className="mt-9 w-full border border-solid bg-zinc-800 border-zinc-800 min-h-px max-md:max-w-full" />
        </div>
      </div>

      <button
        type="submit"
        className="gap-2 self-center px-9 py-3.5 mt-8 text-sm font-medium whitespace-nowrap bg-lime-400 rounded-md text-zinc-900 max-md:px-5"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;