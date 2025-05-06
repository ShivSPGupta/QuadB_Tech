import React from "react";

const TestimonialCard = ({ quote, description, avatar, name, role }) => {
  return (
    <article className="flex-1 shrink self-start px-6 sm:px-10 md:px-16 py-10 sm:py-16 md:py-20 rounded-xl basis-0 min-w-full sm:min-w-[50%] md:min-w-60">
      <div className="w-full">
        <h3 className="text-lg sm:text-xl font-medium leading-7 sm:leading-8 text-lime-200">
          {quote}
        </h3>
        <p className="mt-4 sm:mt-5 text-base leading-6 text-neutral-200">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 items-center p-3 sm:p-3.5 mt-6 sm:mt-8 w-full rounded-md border border-solid bg-neutral-800 bg-opacity-20 border-[color:var(--Grey-15,#262626)]">
        <div className="flex flex-1 shrink gap-3 items-center self-stretch my-auto basis-8 min-w-60">
          <img
            src={avatar}
            alt={name}
            className="object-contain shrink-0 self-stretch my-auto rounded-md aspect-square w-[40px] sm:w-[50px]"
          />
          <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60">
            <h4 className="text-sm sm:text-base font-medium text-white">
              {name}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-200">
              {role}
            </p>
          </div>
        </div>
        <button className="gap-2.5 self-stretch px-3 sm:px-4 py-2.5 sm:py-3.5 my-auto text-xs sm:text-sm font-medium text-white rounded-md bg-neutral-800 mt-2 sm:mt-0 w-full sm:w-auto">
          Open Website
        </button>
      </div>
    </article>
  );
};

export default TestimonialCard;