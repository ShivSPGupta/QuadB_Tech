"use client";
import React, { useState } from "react";
import FAQItem from "./FAQItem";

function FAQSection() {
  const [openItem, setOpenItem] = useState(0);

  const faqItems = [
    {
      id: 1,
      number: "01",
      question: "What services does SquareUp provide?",
      answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
      id: 2,
      number: "02",
      question: "How can SquareUp help my business?",
      answer: "SquareUp can help transform your digital presence through expert design and development services tailored to your specific business needs."
    },
    {
      id: 3,
      number: "03",
      question: "What industries does SquareUp work with?",
      answer: "We work with a wide range of industries including technology, healthcare, finance, education, retail, and more."
    },
    {
      id: 4,
      number: "04",
      question: "How long does it take to complete a project with SquareUp?",
      answer: "Project timelines vary depending on scope and complexity. We provide detailed timelines during our initial consultation."
    },
    {
      id: 5,
      number: "05",
      question: "Do you offer ongoing support and maintenance after the project is completed?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your digital products continue to perform optimally."
    },
    {
      id: 6,
      number: "06",
      question: "Can you work with existing design or development frameworks?",
      answer: "Absolutely. We're experienced in working with a variety of frameworks and can integrate with your existing systems."
    },
    {
      id: 7,
      number: "07",
      question: "How involved will I be in the project development process?",
      answer: "We believe in collaborative development. You'll be involved at key milestones, but we handle all the technical details."
    },
    {
      id: 8,
      number: "08",
      question: "Can you help with website or app maintenance and updates?",
      answer: "Yes, we offer ongoing maintenance and update services to keep your digital products current and secure."
    }
  ];

  return (
    <section className="w-full border border-solid border-[#262626] max-w-[1279px] max-md:max-w-full">
      <div className="flex relative flex-col px-64 py-24 w-full text-center min-h-[280px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://shivshankar1201.sirv.com/digital-agency/Contact/FAQSection/FAQ%20Background.png"
          alt="FAQ Background"
          className="object-cover absolute inset-0 size-full"
        />
        <h2 className="relative text-4xl font-semibold text-white max-md:max-w-full">
          Frequently Asked Questions
        </h2>
        <p className="relative mt-2.5 text-base tracking-normal text-neutral-200 max-md:max-w-full">
          Still you have any questions? Contact our Team via
          hello@squareup.com
        </p>
      </div>
      <div className="flex flex-wrap items-start w-full border-t border-solid border-t-[#262626] max-md:max-w-full">
        <div className="flex-1 shrink py-16 basis-0 min-w-60 max-md:max-w-full">
          <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />

          {faqItems.slice(0, 4).map((item, index) => (
            <FAQItem
              key={item.id}
              number={item.number}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              onClick={() => setOpenItem(index === openItem ? -1 : index)}
            />
          ))}
        </div>
        <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[672px]" />
        <div className="flex-1 shrink py-16 text-white basis-0 min-w-60 max-md:max-w-full">
          <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />

          {faqItems.slice(4).map((item, index) => (
            <FAQItem
              key={item.id}
              number={item.number}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index + 4}
              onClick={() => setOpenItem(index + 4 === openItem ? -1 : index + 4)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;