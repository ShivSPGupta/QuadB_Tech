import React from "react";
import BenefitCard from "./BenefitCard";

function BenefitsSection() {
  const benefits = [
    {
      title: "Innovative and Impactful Projects",
      description: "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference."
    },
    {
      title: "Supportive Environment",
      description: "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference."
    },
    {
      title: "Continuous Learning and Growth",
      description: "We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies."
    },
    {
      title: "Challenging and Rewarding Work",
      description: "Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life."
    }
  ];

  return (
    <section className="mt-10 w-full max-md:max-w-full">
      <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />

      <div className="flex flex-wrap w-full max-md:max-w-full">
        <BenefitCard title={benefits[0].title} description={benefits[0].description} />
        <div className="shrink-0 w-0 border border-solid bg-neutral-800 border-neutral-800 h-[374px]" />
        <BenefitCard title={benefits[1].title} description={benefits[1].description} />
      </div>

      <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />

      <div className="flex flex-wrap items-start w-full max-md:max-w-full">
        <BenefitCard title={benefits[2].title} description={benefits[2].description} />
        <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[398px]" />
        <BenefitCard title={benefits[3].title} description={benefits[3].description} />
      </div>
    </section>
  );
}

export default BenefitsSection;