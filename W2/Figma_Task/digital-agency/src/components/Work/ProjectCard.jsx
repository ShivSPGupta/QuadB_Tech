"use client";
import React from "react";

const ProjectCard = ({
  title,
  companyName,
  websiteUrl,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex-1 shrink pb-12 sm:pb-16 md:pb-20 basis-0 min-w-60 w-full md:w-1/2">
      <div className="flex-1 shrink gap-2.5 self-stretch px-4 sm:px-6 md:px-10 py-4 sm:py-6 w-full text-lg sm:text-xl font-medium border-t border-b border-solid basis-0 border-b-[color:var(--Grey-15,#262626)] border-t-[color:var(--Grey-15,#262626)] text-neutral-400">
        {title}
      </div>
      <div className="px-4 sm:px-6 md:px-10 mt-6 sm:mt-8 w-full">
        <img
          src={imageSrc}
          className="object-contain w-full rounded-xl aspect-[1.62]"
          alt={`${companyName} project`}
        />
        <div className="flex flex-wrap gap-5 sm:gap-10 justify-between items-center mt-4 sm:mt-6 w-full">
          <div className="flex flex-col self-stretch my-auto min-w-60 max-w-[299px]">
            <div className="text-base sm:text-lg font-medium tracking-normal text-neutral-200">
              {companyName}
            </div>
            <div className="gap-2.5 self-start px-2 sm:px-3 py-1.5 sm:py-2 mt-2 sm:mt-2.5 text-sm sm:text-base tracking-normal whitespace-nowrap rounded-md bg-neutral-800 text-neutral-400">
              {websiteUrl}
            </div>
          </div>
          <div className="flex gap-2.5 items-center self-stretch p-2 sm:p-2.5 my-auto rounded-md bg-neutral-800 h-[40px] sm:h-[46px] w-[40px] sm:w-[46px]">
            <img
              src="https://shivshankar1201.sirv.com/digital-agency/Work/ProjectCard/Arrow%20Icon.svg"
              className="object-contain aspect-square w-[22px] sm:w-[26px]"
              alt="Arrow icon"
            />
          </div>
        </div>
        <div className="mt-4 sm:mt-6 text-sm sm:text-base leading-5 sm:leading-6 text-neutral-400">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;