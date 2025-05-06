import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectRow = ({ leftProject, rightProject, dividerHeight = "773px" }) => {
  return (
    <div className="flex flex-col md:flex-row items-start w-full">
      {/* Left Project Card */}
      <ProjectCard
        title={leftProject.title}
        companyName={leftProject.companyName}
        websiteUrl={leftProject.websiteUrl}
        description={leftProject.description}
        imageSrc={leftProject.imageSrc}
      />

      {/* Divider Line (visible only on desktop) */}
      <div
        className="hidden md:block shrink-0 self-stretch w-0 border border-solid bg-neutral-800 border-neutral-800"
        style={{ height: dividerHeight }}
      />

      {/* Right Project Card */}
      <ProjectCard
        title={rightProject.title}
        companyName={rightProject.companyName}
        websiteUrl={rightProject.websiteUrl}
        description={rightProject.description}
        imageSrc={rightProject.imageSrc}
        isLastInRow={true}
      />
    </div>
  );
};

export default ProjectRow;