import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col items-center text-center p-6 sm:p-8 md:p-10 bg-transparent border border-neutral-800 rounded-lg">
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-neutral-900 rounded-full mb-6">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-2/3 h-2/3 object-contain"
        />
      </div>

      {/* Title & Description */}
      <h3 className="text-xl sm:text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base text-neutral-300 leading-relaxed">{description}</p>

      {/* Button */}
      <button className="mt-8 px-4 py-3 w-full text-sm font-medium text-white bg-neutral-800 rounded-md hover:bg-neutral-700 transition">
        Learn More
      </button>
    </article>
  );
};

export default ServiceCard;
