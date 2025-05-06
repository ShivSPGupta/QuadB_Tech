"use client";
import React from "react";
import ProjectRow from "./ProjectRow";

// Project data
const projectsData = [
  // Row 1
  {
    leftProject: {
      title: "E-Commerce Platform for Fashion Hub",
      companyName: "Chic Boutique",
      websiteUrl: "htttps:/www.chicboutique.com",
      description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
      imageSrc: "https://shivshankar1201.sirv.com/digital-agency/Work/ProjectGrid/Chic%20Boutique.png"
    },
    rightProject: {
      title: "Mobile App for Food Delivery Service",
      companyName: "HungryBites",
      websiteUrl: "htttps:/www.hungrybites.com",
      description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
      imageSrc: "https://shivshankar1201.sirv.com/digital-agency/Work/ProjectGrid/HungryBites.png"
    },
    dividerHeight: "773px"
  },
  // Row 2
  {
    leftProject: {
      title: "Booking and Reservation System for Event Management",
      companyName: "EventMasters",
      websiteUrl: "htttps:/www.eventmasters.com",
      description: "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
      imageSrc: "https://shivshankar1201.sirv.com/digital-agency/Work/ProjectGrid/EventMasters.png"
    },
    rightProject: {
      title: "Custom Software for Workflow Automation",
      companyName: "ProTech Solutions",
      websiteUrl: "htttps:/www.protechsolutions.com",
      description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
      imageSrc: "https://shivshankar1201.sirv.com/digital-agency/Work/ProjectGrid/ProTech%20Solutions.png"
    },
    dividerHeight: "773px"
  },
  // Row 3
  {
    leftProject: {
      title: "Web Portal for Real Estate Listings",
      companyName: "Dream Homes Realty",
      websiteUrl: "htttps:/www.dreamhomesrealty.com",
      description: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
      imageSrc: "https://shivshankar1201.sirv.com/digital-agency/Work/ProjectGrid/Dream%20Homes%20Realty.png"
    },
    rightProject: {
      title: "Mobile App for Fitness Tracking",
      companyName: "FitLife Tracker",
      websiteUrl: "htttps:/www.fitlifetracker.com",
      description: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
      imageSrc: "https://shivshankar1201.sirv.com/digital-agency/Work/ProjectGrid/FitLife%20Tracker.png"
    },
    dividerHeight: "749px"
  },
  // Row 4
  {
    leftProject: {
      title: "Custom Software for Supply Chain Management",
      companyName: "Global Logistics Solutions",
      websiteUrl: "htttps:/www.globallogisticssolutions.com",
      description: "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
      imageSrc: "https://shivshankar1201.sirv.com/digital-agency/Work/ProjectGrid/Global%20Logistics%20Solutions.png"
    },
    rightProject: {
      title: "Educational Platform for Online Learning",
      companyName: "EduConnect",
      websiteUrl: "htttps:/www.educonnect.com",
      description: "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.",
      imageSrc: "https://shivshankar1201.sirv.com/digital-agency/Work/ProjectGrid/EduConnect.png"
    },
    dividerHeight: "773px"
  },
  // Row 5
  {
    leftProject: {
      title: "Mobile App for Travel Planning",
      companyName: "WanderWise",
      websiteUrl: "htttps:/www.wanderwise.com",
      description: "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.",
      imageSrc: "https://shivshankar1201.sirv.com/digital-agency/Work/ProjectGrid/WanderWise.png"
    },
    rightProject: {
      title: "Web Application for Customer Relationship Management",
      companyName: "ConnectCRM",
      websiteUrl: "htttps:/www.connectcrm.com",
      description: "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.",
      imageSrc: "https://shivshankar1201.sirv.com/digital-agency/Work/ProjectGrid/ConnectCRM.png"
    },
    dividerHeight: "769px"
  }
];

const ProjectsGrid = () => {
  return (
    <div className="mt-6 sm:mt-8 md:mt-10 w-full">
      {projectsData.map((row, index) => (
        <ProjectRow
          key={index}
          leftProject={row.leftProject}
          rightProject={row.rightProject}
          dividerHeight={row.dividerHeight}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;