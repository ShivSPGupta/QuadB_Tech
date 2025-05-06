import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceSubcategory({ title, services, isLast }) {
  return (
    <div className={`${!isLast ? 'mb-10' : ''} w-full max-md:max-w-full`}>
      <h3 className="flex-1 shrink gap-2.5 pl-10 w-full text-2xl font-medium basis-0 text-neutral-400 max-md:pl-5 max-md:max-w-full">
        {title}
      </h3>
      <div className={`flex flex-wrap items-start mt-10 w-full border-t ${!isLast ? 'border-b' : ''} border-solid border-t-[#262626] ${!isLast ? 'border-b-[#262626]' : ''} max-md:max-w-full`}>
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <ServiceCard
              icon={service.icon}
              text={service.text}
            />
            {index < services.length - 1 && (
              <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[216px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ServiceSubcategory;