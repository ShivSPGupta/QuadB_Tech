import React from "react";
import JobCategorySection from "./JobCategorySection";

function JobOpeningsSection() {
  const designJobs = [
    {
      iconSrc: "https://shivshankar1201.sirv.com/digital-agency/Careers/JobOpeningsSection/UI%20Designer.svg",
      title: "UI Designer",
      description: "Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."
    },
    {
      iconSrc: "https://shivshankar1201.sirv.com/digital-agency/Careers/JobOpeningsSection/UX%20Designer.svg",
      title: "UX Designer",
      description: "Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys."
    },
    {
      iconSrc: "https://shivshankar1201.sirv.com/digital-agency/Careers/JobOpeningsSection/Design%20Head.svg",
      title: "Design Head",
      description: "Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs."
    }
  ];

  const developmentJobs = [
    {
      iconSrc: "https://shivshankar1201.sirv.com/digital-agency/Careers/JobOpeningsSection/Front%20-%20End%20Developer.svg",
      title: "Front - End Developer",
      description: "Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences."
    },
    {
      iconSrc: "https://shivshankar1201.sirv.com/digital-agency/Careers/JobOpeningsSection/Back%20-%20End%20Developer.svg",
      title: "Back - End Developer",
      description: "Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface."
    },
    {
      iconSrc: "https://shivshankar1201.sirv.com/digital-agency/Careers/JobOpeningsSection/Full%20Stack%20Developer.svg",
      title: "Full Stack Developer",
      description: "Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions."
    }
  ];

  const managementJobs = [
    {
      iconSrc: "https://shivshankar1201.sirv.com/digital-agency/Careers/JobOpeningsSection/BA%20Manager.svg",
      title: "BA Manager",
      description: "Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts."
    },
    {
      iconSrc: "https://shivshankar1201.sirv.com/digital-agency/Careers/JobOpeningsSection/Project%20Manager.svg",
      title: "Project Manager",
      description: "Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success."
    },
    {
      iconSrc: "https://shivshankar1201.sirv.com/digital-agency/Careers/JobOpeningsSection/HR%20Manager.svg",
      title: "HR Manager",
      description: "Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture."
    }
  ];

  const qaJobs = [
    {
      iconSrc: "https://shivshankar1201.sirv.com/digital-agency/Careers/JobOpeningsSection/QA%20Tester.svg",
      title: "QA Tester",
      description: "Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience."
    },
    {
      iconSrc: "https://shivshankar1201.sirv.com/digital-agency/Careers/JobOpeningsSection/SQL%20Tester.svg",
      title: "SQL Tester",
      description: "Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data."
    },
    {
      iconSrc: "https://shivshankar1201.sirv.com/digital-agency/Careers/JobOpeningsSection/Manual%20Tester.svg",
      title: "Manual Tester",
      description: "Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance."
    }
  ];

  return (
    <section className="pt-20 w-full max-w-screen-xl border border-solid border-[color:var(--Grey-15,#262626)] max-md:max-w-full">
      <div className="pr-64 pl-10 w-full max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl font-semibold text-white max-md:max-w-full">
          Current Openings
        </h2>
        <p className="mt-2.5 text-base tracking-normal leading-6 text-neutral-200 max-md:max-w-full">
          We are always on the lookout for talented individuals who are
          passionate about creating exceptional digital experiences. Whether
          you're a designer, engineer, project manager, or have skills that
          align with our agency's mission, we encourage you to explore our
          open positions.
        </p>
      </div>
      <div className="pt-10 mt-10 w-full border-t border-solid border-t-[color:var(--Grey-15,#262626)] max-md:max-w-full">
        <JobCategorySection title="Design" jobs={designJobs} />
        <JobCategorySection title="Development" jobs={developmentJobs} />
        <JobCategorySection title="Management" jobs={managementJobs} />
        <JobCategorySection title="QA" jobs={qaJobs} />
      </div>
    </section>
  );
}

export default JobOpeningsSection;