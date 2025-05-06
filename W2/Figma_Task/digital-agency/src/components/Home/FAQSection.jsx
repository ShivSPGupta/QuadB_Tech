import React from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  return (
    <section className="w-full max-w-screen-xl border border-solid border-[color:var(--Grey-15,#262626)]">
      <div className="flex relative flex-col px-6 sm:px-12 md:px-24 lg:px-64 py-16 sm:py-20 md:py-24 w-full text-center min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
        <img
          src="https://shivshankar1201.sirv.com/digital-agency/Home/FAQSection/FAQ%20Background.png"
          alt="FAQ Background"
          className="object-cover absolute inset-0 size-full"
        />
        <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          Frequently Asked Questions
        </h2>
        <p className="relative mt-2.5 text-base tracking-normal text-neutral-200">
          Still you have any questions? Contact our Team via
          hello@squareup.com
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start w-full border-t border-solid border-t-[color:var(--Grey-15,#262626)]">
        <div className="flex-1 shrink py-8 sm:py-12 md:py-16 basis-0 min-w-full md:min-w-60">
          <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
          <FAQItem
            number="01"
            question="What services does SquareUp provide?"
            answer="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
            isOpen={true}
          />
          <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
          <FAQItem
            number="02"
            question="How can SquareUp help my business?"
          />
          <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
          <FAQItem
            number="03"
            question="What industries does SquareUp work with?"
          />
          <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
          <FAQItem
            number="04"
            question="How long does it take to complete a project with SquareUp?"
          />
          <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
        </div>

        {/* Divider - horizontal on mobile, vertical on desktop */}
        <div className="h-px md:h-[672px] w-full md:w-0 border border-solid bg-neutral-800 border-neutral-800" />

        <div className="flex-1 shrink py-8 sm:py-12 md:py-16 text-white basis-0 min-w-full md:min-w-60">
          <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
          <FAQItem
            number="05"
            question="Do you offer ongoing support and maintenance after the project is completed?"
          />
          <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
          <FAQItem
            number="06"
            question="Can you work with existing design or development frameworks?"
          />
          <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
          <FAQItem
            number="07"
            question="How involved will I be in the project development process?"
          />
          <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
          <FAQItem
            number="08"
            question="Can you help with website or app maintenance and updates?"
          />
          <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;