import React from "react";

function ProcessCard({ step }) {
  const { number, title, description } = step;

  return (
    <article className="flex-1 shrink px-10 py-20 basis-0 min-w-60 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-3.5 items-end w-full max-md:max-w-full">
        <div className="text-9xl font-semibold text-lime-200 max-md:text-4xl">
          {number}
        </div>
        <h3 className="flex-1 shrink gap-2.5 self-stretch pb-5 pl-2.5 text-2xl font-medium border-b border-solid basis-0 border-b-[color:var(--Grey-15,#262626)] min-w-60 text-neutral-400 max-md:max-w-full">
          {title}
        </h3>
      </div>
      <p className="mt-10 text-base leading-6 text-neutral-400 max-md:max-w-full">
        {description}
      </p>
    </article>
  );
}

export default ProcessCard;