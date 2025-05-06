"use client";
import React from "react";
import ContactForm from "./ContactForm";

function ContactInfo() {
  return (
    <section className="w-full border border-solid border-[#262626] max-w-[1282px] max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-center items-center py-10 w-full text-base font-medium text-neutral-200 max-md:max-w-full">
        <button className="flex gap-3.5 items-center self-stretch px-5 py-3.5 my-auto whitespace-nowrap rounded-md bg-neutral-800">
          <img
            src="https://shivshankar1201.sirv.com/digital-agency/Contact/ContactInfo/Email%20Icon.svg"
            alt="Email Icon"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="self-stretch my-auto text-neutral-200">
            hello@squareup.com
          </span>
        </button>
        <button className="flex gap-3.5 items-center self-stretch px-5 py-3.5 my-auto rounded-md bg-neutral-800">
          <img
            src="https://shivshankar1201.sirv.com/digital-agency/Contact/ContactInfo/Phone%20Icon.svg"
            alt="Phone Icon"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="self-stretch my-auto text-neutral-200">
            +91 91813 23 2309
          </span>
        </button>
        <button className="flex gap-3.5 items-center self-stretch px-5 py-3.5 my-auto rounded-md bg-neutral-800">
          <img
            src="https://shivshankar1201.sirv.com/digital-agency/Contact/ContactInfo/Location%20Icon.svg"
            alt="Location Icon"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <span className="self-stretch my-auto text-neutral-200">
            Get Location
          </span>
        </button>
      </div>
      <div className="px-56 w-full border-t border-solid border-t-[#262626] max-md:px-5 max-md:max-w-full">
        <ContactForm />
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center px-12 w-full border-t border-solid border-t-[#262626] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-3.5 items-center self-stretch py-12 my-auto text-base font-medium min-w-60 text-neutral-200">
          <h3 className="self-stretch my-auto text-neutral-200">
            Operating Days
          </h3>
          <div className="gap-3.5 self-stretch px-5 py-2.5 my-auto rounded-md bg-neutral-800 text-neutral-200">
            Monday to Friday
          </div>
        </div>
        <div className="shrink-0 self-stretch w-0 h-36 border border-solid bg-neutral-800 border-neutral-800" />
        <div className="flex gap-5 items-center self-stretch py-2.5 pr-2.5 pl-5 my-auto rounded-lg border border-solid border-[#262626] min-w-60">
          <h3 className="self-stretch my-auto text-base font-medium text-neutral-200">
            Stay Connected
          </h3>
          <div className="flex gap-2.5 items-start self-stretch my-auto">
            <button className="flex flex-col justify-center p-4 rounded-md w-[52px]">
              <img
                src="https://shivshankar1201.sirv.com/digital-agency/Contact/ContactInfo/Social%20Media%20Icon.svg"
                alt="Social Media Icon"
                className="object-contain w-5 aspect-square"
              />
            </button>
            <button className="flex flex-col justify-center p-4 rounded-md w-[52px]">
              <img
                src="https://shivshankar1201.sirv.com/digital-agency/Contact/ContactInfo/Social%20Media%20Icon%202.svg"
                alt="Social Media Icon"
                className="object-contain w-5 aspect-square"
              />
            </button>
            <button className="flex flex-col justify-center p-4 rounded-md w-[52px]">
              <img
                src="https://shivshankar1201.sirv.com/digital-agency/Contact/ContactInfo/Social%20Media%20Icon%203.svg"
                alt="Social Media Icon"
                className="object-contain w-5 aspect-square"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;