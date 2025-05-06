import React from "react";

function IntroSection() {
  return (
    <section className="pt-20 w-full max-w-screen-xl border border-solid border-[color:var(--Grey-15,#262626)] max-md:max-w-full">
      <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="pr-64 w-full max-md:pr-5 max-md:max-w-full">
          <h2 className="text-4xl font-semibold text-white max-md:max-w-full">
            At SquareUp
          </h2>
          <p className="mt-2.5 text-base tracking-normal leading-6 text-neutral-200 max-md:max-w-full">
            We follow a structured and collaborative process to ensure the
            successful delivery of exceptional digital products. Our process
            combines industry best practices, creative thinking, and a
            client-centric approach.
          </p>
        </div>
        <div className="gap-2.5 self-start p-2.5 mt-10 text-lg text-white rounded-md bg-neutral-800">
          Here's an overview of our typical process:
        </div>
      </div>
    </section>
  );
}

export default IntroSection;