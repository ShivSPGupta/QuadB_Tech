import React from "react";

function ServiceCard({ icon, text }) {
  return (
    <article className="flex-1 shrink p-10 basis-0 min-w-60 max-md:px-5">
      <div className="flex flex-col justify-center p-5 w-16 rounded-lg">
        <img
          src={icon}
          alt={text}
          className="object-contain w-full aspect-square"
        />
      </div>
      <h4 className="mt-6 text-base font-medium tracking-normal leading-6 text-neutral-200">
        {text}
      </h4>
    </article>
  );
}

export default ServiceCard;