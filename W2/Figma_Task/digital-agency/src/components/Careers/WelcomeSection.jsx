import React from "react";

function WelcomeSection() {
  return (
    <section className="pt-20 w-full max-w-screen-xl border border-solid border-[color:var(--Grey-15,#262626)] max-md:max-w-full">
      <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="pr-64 w-full max-md:pr-5 max-md:max-w-full">
          <h2 className="text-4xl font-semibold text-white max-md:max-w-full">
            Welcome to SquareUp, where talent meets opportunity!
          </h2>
          <p className="mt-2.5 text-base tracking-normal leading-6 text-neutral-200 max-md:max-w-full">
            At SquareUp, we believe that the success of our agency lies in the
            talent, passion, and dedication of our team members. We are a
            digital product agency that thrives on innovation, creativity, and
            collaboration. If you're ready to make a difference and contribute
            to cutting-edge projects, we invite you to explore career
            opportunities with us.
          </p>
        </div>
        <div className="gap-2.5 self-start p-2.5 mt-10 text-lg text-white rounded-md bg-neutral-800">
          Why Work at SquareUp?
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
