import React from "react";

function FAQItem({ number, question, answer, isOpen, onClick }) {
  return (
    <>
      <div className={`flex flex-wrap gap-${isOpen ? '6' : '8'} ${isOpen ? 'px-10 py-8' : 'items-center px-10 py-6'} w-full max-md:px-5 max-md:max-w-full`}>
        <div className={`self-${isOpen ? 'start' : 'stretch'} p-4 ${isOpen ? '' : 'my-auto'} text-2xl font-semibold text-center ${isOpen ? 'text-lime-400' : 'text-white'} whitespace-nowrap rounded-lg w-[62px]`}>
          {number}
        </div>
        <div className={`${isOpen ? 'flex-1 shrink pt-6 basis-8 min-w-60 max-md:max-w-full' : 'flex-1 shrink self-stretch my-auto text-lg font-medium text-white basis-8'}`}>
          {isOpen ? (
            <>
              <div className="flex gap-5 items-center w-full text-lg font-medium text-lime-300 max-md:max-w-full">
                <h3 className="flex-1 shrink self-stretch my-auto text-lime-300 basis-0 max-md:max-w-full">
                  {question}
                </h3>
                <img
                  src="https://shivshankar1201.sirv.com/digital-agency/Contact/FAQItem/Collapse.svg"
                  alt="Collapse"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[26px]"
                />
              </div>
              <p className="mt-4 text-base leading-6 text-neutral-200 max-md:max-w-full">
                {answer}
              </p>
            </>
          ) : (
            <h3 className="text-lg font-medium leading-7 text-white">
              {question}
            </h3>
          )}
        </div>
        {!isOpen && (
          <img
            src={isOpen ? "https://shivshankar1201.sirv.com/digital-agency/Contact/FAQItem/Collapse.svg" : "https://shivshankar1201.sirv.com/digital-agency/Contact/FAQItem/Expand.svg"}
            alt={isOpen ? "Collapse" : "Expand"}
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[26px]"
            onClick={onClick}
          />
        )}
      </div>
      <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />
    </>
  );
}

export default FAQItem;