import React from "react";
import ServiceSubcategory from "./ServiceSubcategory";

function ServiceCategory({ title, description, subcategories }) {
  return (
    <section className="pt-20 w-full max-w-screen-xl border border-solid border-[#262626] max-md:max-w-full">
      <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="pr-64 w-full max-md:pr-5 max-md:max-w-full">
          <h2 className="text-4xl font-semibold text-white max-md:max-w-full">
            {title}
          </h2>
          <p className="mt-2.5 text-base tracking-normal leading-6 text-neutral-200 max-md:max-w-full">
            {description}
          </p>
        </div>
        <div className="gap-2.5 self-start p-2.5 mt-10 text-lg text-white rounded-md bg-neutral-800">
          Our {title.toLowerCase()} services include:
        </div>
      </div>

      <div className="pt-10 mt-10 w-full border-t border-solid border-t-[#262626] max-md:max-w-full">
        {subcategories.map((subcategory, index) => (
          <ServiceSubcategory
            key={index}
            title={subcategory.title}
            services={subcategory.services}
            isLast={index === subcategories.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceCategory;