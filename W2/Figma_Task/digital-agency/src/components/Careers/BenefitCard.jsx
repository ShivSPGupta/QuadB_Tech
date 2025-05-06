import React from "react";

function BenefitCard({ title, description }) {
  return (
    <article className="flex-1 shrink px-10 py-20 basis-0 min-w-60 max-md:px-5 max-md:max-w-full">
      <div className="w-full text-3xl font-medium text-lime-200 max-md:max-w-full">
        <h3 className="text-lime-200 max-md:max-w-full">
          {title}
        </h3>
        <div className="mt-10 w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />
      </div>
      <p className="mt-8 text-base leading-6 text-neutral-400 max-md:max-w-full">
        {description}
      </p>
    </article>
  );
}

export default BenefitCard;
