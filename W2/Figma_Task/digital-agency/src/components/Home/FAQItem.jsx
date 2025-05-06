"use client";
import React, { useState } from "react";

const FAQItem = ({ number, question, answer, isOpen = false }) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  return (
    <>
      {isExpanded ? (
        <div className="flex flex-wrap gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 py-6 sm:py-8 w-full">
          <div className="self-start p-3 sm:p-4 text-xl sm:text-2xl font-semibold text-center text-lime-400 whitespace-nowrap rounded-lg w-[50px] sm:w-[62px]">
            {number}
          </div>
          <div className="flex-1 shrink pt-4 sm:pt-6 basis-8 min-w-60">
            <div className="flex gap-3 sm:gap-5 items-center w-full text-base sm:text-lg font-medium text-lime-300">
              <h3 className="flex-1 shrink self-stretch my-auto text-lime-300 basis-0">
                {question}
              </h3>
              <button onClick={() => setIsExpanded(false)}>
                <img
                  src="https://shivshankar1201.sirv.com/digital-agency/Home/FAQITEM/Collapse.svg"
                  alt="Collapse"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[20px] sm:w-[26px]"
                />
              </button>
            </div>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 text-neutral-200">
              {answer}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 sm:gap-8 items-center px-4 sm:px-6 md:px-10 py-4 sm:py-6 w-full text-white">
          <div className="self-stretch p-3 sm:p-4 my-auto text-xl sm:text-2xl font-semibold text-center text-white whitespace-nowrap rounded-lg w-[50px] sm:w-[62px]">
            {number}
          </div>
          <h3 className="flex-1 shrink self-stretch my-auto text-base sm:text-lg font-medium text-white basis-8">
            {question}
          </h3>
          <button onClick={() => setIsExpanded(true)}>
            <img
              src="https://shivshankar1201.sirv.com/digital-agency/Home/FAQITEM/Expand.svg"
              alt="Expand"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[20px] sm:w-[26px]"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default FAQItem;