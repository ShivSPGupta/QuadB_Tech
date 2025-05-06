import React from "react";

function JobCard({ iconSrc, title, description }) {
  return (
    <article className="flex-1 shrink p-10 basis-0 min-w-60 max-md:px-5 max-md:max-w-full">
      <div className="w-full">
        <div className="flex flex-col justify-center p-5 rounded-lg w-[74px]">
          <img
            src={iconSrc}
            alt={`${title} icon`}
            className="object-contain w-full aspect-square"
          />
        </div>
        <div className="mt-6 w-full">
          <h3 className="text-xl font-medium tracking-normal text-white">
            {title}
          </h3>
          <p className="mt-3.5 text-base tracking-normal leading-6 text-neutral-200">
            {description}
          </p>
        </div>
      </div>
      <button className="gap-2.5 self-stretch px-4 py-3.5 mt-8 w-full text-sm font-medium tracking-normal leading-6 text-white rounded-md bg-neutral-800">
        Apply Now
      </button>
    </article>
  );
}

export default JobCard;