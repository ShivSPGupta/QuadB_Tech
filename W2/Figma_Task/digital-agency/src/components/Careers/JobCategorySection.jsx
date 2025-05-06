import React from "react";
import JobCard from "./JobCard";

function JobCategorySection({ title, jobs }) {
  return (
    <div className="mt-10 w-full max-md:max-w-full">
      <h3 className="flex-1 shrink gap-2.5 pl-10 w-full text-2xl font-medium basis-0 text-neutral-400 max-md:pl-5 max-md:max-w-full">
        {title} Job Openings
      </h3>
      <div className="flex flex-wrap mt-10 w-full border-t border-b border-solid border-b-[color:var(--Grey-15,#262626)] border-t-[color:var(--Grey-15,#262626)] max-md:max-w-full">
        {jobs.map((job, index) => (
          <React.Fragment key={job.title}>
            <JobCard
              iconSrc={job.iconSrc}
              title={job.title}
              description={job.description}
            />
            {index < jobs.length - 1 && (
              <div className="shrink-0 w-0 border border-solid bg-neutral-800 border-neutral-800 h-[472px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default JobCategorySection;