"use client";
import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-screen-xl border border-solid border-[color:var(--Grey-15,#262626)] max-md:max-w-full"
    >
      <div className="flex relative flex-col items-center px-64 py-24 w-full min-h-[483px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://shivshankar1201.sirv.com/digital-agency/Home/ContactSection/Contact%20Background.png"
          alt="Contact Background"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <img
          src="https://shivshankar1201.sirv.com/digital-agency/Home/ContactSection/Contact%20Icon.svg"
          alt="Contact Icon"
          className="object-contain absolute top-12 shadow-sm aspect-square w-[60px]"
        />

        <div className="relative self-stretch mt-10 w-full text-center max-md:max-w-full">
          <h2 className="text-3xl font-semibold text-white max-md:max-w-full">
            Thank you for your Interest in SquareUp.
          </h2>
          <p className="mt-2.5 text-base tracking-normal leading-6 text-neutral-200 max-md:max-w-full">
            We would love to hear from you and discuss how we can help bring
            your digital ideas to life. Here are the different ways you can get
            in touch with us.
          </p>
        </div>
        <button className="relative gap-2 self-stretch sm:self-auto px-4 sm:px-6 py-2.5 sm:py-3.5 mt-6 sm:mt-8 md:mt-10 text-sm font-medium bg-lime-400 rounded-md text-zinc-900">
          Start Project
        </button>
      </div>
      <div className="px-56 w-full border-t border-solid border-t-[color:var(--Grey-15,#262626)] max-md:px-5 max-md:max-w-full">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
