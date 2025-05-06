import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className="flex-1 shrink p-6 sm:p-10 md:p-16 basis-0 min-w-full sm:min-w-[50%] md:min-w-60">
      <div className="flex flex-wrap gap-3.5 items-center w-full">
        <div className="flex overflow-hidden flex-col justify-center self-stretch p-4 sm:p-5 my-auto rounded-lg w-[60px] sm:w-[70px]">
          <img
            src={icon}
            alt={`${title} icon`}
            className="object-contain aspect-square w-[25px] sm:w-[30px]"
          />
        </div>
        <h3 className="flex-1 shrink self-stretch my-auto text-lg sm:text-xl font-medium tracking-normal text-white basis-10">
          {title}
        </h3>
      </div>
      <p className="mt-6 sm:mt-8 text-base tracking-normal leading-6 text-neutral-200">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;