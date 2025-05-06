import React from "react";
import ProcessCard from "./ProcessCard";

function ProcessSteps() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy."
    },
    {
      number: "02",
      title: "Planning and Strategy",
      description: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision."
    },
    {
      number: "03",
      title: "Design",
      description: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel."
    },
    {
      number: "04",
      title: "Development",
      description: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns."
    },
    {
      number: "05",
      title: "Testing and Quality Assurance",
      description: "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability."
    },
    {
      number: "06",
      title: "Deployment and Launch",
      description: "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations."
    },
    {
      number: "07",
      title: "Post-Launch Support",
      description: "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support."
    },
    {
      number: "08",
      title: "Continuous Improvement",
      description: "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve."
    }
  ];

  return (
    <div className="mt-10 w-full max-md:max-w-full">
      <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />

      {/* First row of process cards */}
      <div className="flex flex-wrap items-start w-full max-md:max-w-full">
        <ProcessCard step={processSteps[0]} />
        <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[380px]" />
        <ProcessCard step={processSteps[1]} />
      </div>

      <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />

      {/* Second row of process cards */}
      <div className="flex flex-wrap items-start w-full max-md:max-w-full">
        <ProcessCard step={processSteps[2]} />
        <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[404px]" />
        <ProcessCard step={processSteps[3]} />
      </div>

      <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />

      {/* Third row of process cards */}
      <div className="flex flex-wrap items-start w-full max-md:max-w-full">
        <ProcessCard step={processSteps[4]} />
        <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[404px]" />
        <ProcessCard step={processSteps[5]} />
      </div>

      <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px max-md:max-w-full" />

      {/* Fourth row of process cards */}
      <div className="flex flex-wrap items-start w-full max-md:max-w-full">
        <ProcessCard step={processSteps[6]} />
        <div className="shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800 h-[404px]" />
        <ProcessCard step={processSteps[7]} />
      </div>
    </div>
  );
}

export default ProcessSteps;