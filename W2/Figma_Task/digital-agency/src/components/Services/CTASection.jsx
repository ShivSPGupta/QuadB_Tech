import React from "react";

function CTASection() {
  return (
    <section className="flex overflow-hidden relative z-10 flex-col items-center px-64 py-24 w-full max-w-[1282px] min-h-[509px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://shivshankar1201.sirv.com/digital-agency/Services/CTASection/CTA%20Background.png"
        alt="CTA Background"
        className="object-cover absolute inset-0 size-full"
      />
      <img
        src="https://shivshankar1201.sirv.com/digital-agency/Services/CTASection/Icon.svg"
        alt="Icon"
        className="object-contain absolute top-12 shadow-sm aspect-square fill-lime-400 w-[60px]"
      />
      <div className="relative self-stretch mt-10 w-full text-center max-md:max-w-full">
        <h2 className="text-3xl font-semibold text-white max-md:max-w-full">
          Let us Bring your Ideas to Life in the Digital World.
        </h2>
        <p className="mt-2.5 text-base tracking-normal leading-6 text-neutral-200 max-md:max-w-full">
          No matter which services you choose, we are committed to delivering
          exceptional results that exceed your expectations. Our
          multidisciplinary team works closely together to ensure seamless
          collaboration and a unified vision for your digital product.
        </p>
      </div>
      <button className="relative gap-2 self-stretch px-6 py-3.5 mt-10 text-sm font-medium bg-lime-400 rounded-md text-zinc-900 max-md:px-5">
        Start Project
      </button>
    </section>
  );
}

export default CTASection;