import React from "react";

const TrustedCompaniesSection = () => {
  return (
    <section className="flex relative z-10 flex-wrap justify-center py-12 px-4 w-full max-w-screen-xl border-r border-b border-l border-solid bg-neutral-800 bg-opacity-20 border-b-[color:var(--Grey-15,#262626)] border-l-[color:var(--Grey-15,#262626)] border-r-[color:var(--Grey-15,#262626)]">
      <div className="overflow-hidden absolute left-2/4 z-0 gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3.5 text-sm font-medium text-center text-white border border-solid -translate-x-2/4 bg-zinc-900 border-[color:var(--Grey-15,#262626)] rounded-[100px] top-[-21px] translate-y-[0%]">
        Trusted By 250+ Companies
      </div>

      {/* Responsive grid for logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 w-full mt-4">
        <div className="flex justify-center items-center p-4">
          <img
            src="https://shivshankar1201.sirv.com/digital-agency/Home/TrustedCompaniesSection/Company%20Logo%201.svg"
            alt="Company Logo 1"
            className="object-contain h-10 w-auto"
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src="https://shivshankar1201.sirv.com/digital-agency/Home/TrustedCompaniesSection/Company%20Logo%202.svg"
            alt="Company Logo 2"
            className="object-contain h-10 w-auto"
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src="https://shivshankar1201.sirv.com/digital-agency/Home/TrustedCompaniesSection/Company%20Logo%203.svg"
            alt="Company Logo 3"
            className="object-contain h-10 w-auto"
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src="https://shivshankar1201.sirv.com/digital-agency/Home/TrustedCompaniesSection/Company%20Logo%204.svg"
            alt="Company Logo 4"
            className="object-contain h-10 w-auto"
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src="https://shivshankar1201.sirv.com/digital-agency/Home/TrustedCompaniesSection/Company%20Logo%205.svg"
            alt="Company Logo 5"
            className="object-contain h-10 w-auto"
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <img
            src="https://shivshankar1201.sirv.com/digital-agency/Home/TrustedCompaniesSection/Company%20Logo%206.svg"
            alt="Company Logo 6"
            className="object-contain h-10 w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;