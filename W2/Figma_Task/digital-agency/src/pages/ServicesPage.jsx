"use client";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Services/HeroSection";
import ServiceCategory from "../components/Services/ServiceCategory";
import CTASection from "../components/Services/CTASection";
import Footer from "../components/Footer/Footer";

function ServicesPage() {
  // Design service data
  const designServices = {
    title: "Design",
    description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    subcategories: [
      {
        title: "User Experience (UX) Design",
        services: [
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Design/User%20Experience%20(UX)%20Design/Icon1.svg", text: "User Research and Persona Development" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Design/User%20Experience%20(UX)%20Design/Icon2.svg", text: "Information Architecture and Wireframing" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Design/User%20Experience%20(UX)%20Design/Icon3.svg", text: "Interactive Prototyping and User Testing" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Design/User%20Experience%20(UX)%20Design/Icon4.svg", text: "UI Design and Visual Branding" }
        ]
      },
      {
        title: "User Interface (UI) Design",
        services: [
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Design/User%20Interface%20(UI)%20Design/Icon1.svg", text: "Intuitive and Visually Appealing Interface Design" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Design/User%20Interface%20(UI)%20Design/Icon2.svg", text: "Custom Iconography and Illustration" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Design/User%20Interface%20(UI)%20Design/Icon3.svg", text: "Typography and Color Palette Selection" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Design/User%20Interface%20(UI)%20Design/Icon4.svg", text: "Responsive Design for Various Devices" }
        ]
      },
      {
        title: "Branding and Identity",
        services: [
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Design/Branding%20and%20Identity/Icon1.svg", text: "Logo Design and Visual Identity Development" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Design/Branding%20and%20Identity/Icon2.svg", text: "Brand Strategy and Positioning" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Design/Branding%20and%20Identity/Icon3.svg", text: "Brand Guidelines and Style Guides" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Design/Branding%20and%20Identity/Icon4.svg", text: "Marketing Collateral Design (Brochures, Business Cards, etc.)" }
        ]
      }
    ]
  };

  // Engineering service data
  const engineeringServices = {
    title: "Engineering",
    description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    subcategories: [
      {
        title: "Web Development",
        services: [
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Engineering/Web%20Development/Icon1.svg", text: "Front-End Development (HTML, CSS, JavaScript)" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Engineering/Web%20Development/Icon2.svg", text: "Back-End Development (PHP, Python, Ruby)" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Engineering/Web%20Development/Icon3.svg", text: "Content Management System (CMS) Development (WordPress, Drupal)" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Engineering/Web%20Development/Icon4.svg", text: "E-Commerce Platform Development (Magento, Shopify)" }
        ]
      },
      {
        title: "Mobile App Development",
        services: [
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Engineering/Mobile%20App%20Development/Icon1.svg", text: "Native iOS and Android App Development" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Engineering/Mobile%20App%20Development/Icon2.svg", text: "Cross-Platform App Development (React Native, Flutter)" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Engineering/Mobile%20App%20Development/Icon3.svg", text: "App Prototyping and UI/UX Design Integration" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Engineering/Mobile%20App%20Development/Icon4.svg", text: "App Testing, Deployment, and Maintenance" }
        ]
      },
      {
        title: "Custom Software Development",
        services: [
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Engineering/Custom%20Software%20Development/Icon1.svg", text: "Enterprise Software Development" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Engineering/Custom%20Software%20Development/Icon2.svg", text: "Custom Web Application Development" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Engineering/Custom%20Software%20Development/Icon3.svg", text: "Integration with Third-Party APIs and Systems" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Engineering/Custom%20Software%20Development/Icon4.svg", text: "Legacy System Modernization and Migration" }
        ]
      }
    ]
  };

  // Project Management service data
  const projectManagementServices = {
    title: "Project Management",
    description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    subcategories: [
      {
        title: "Project Planning and Scoping",
        services: [
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Project%20Management/Project%20Planning%20and%20Scoping/Icon1.svg", text: "Requirements Gathering and Analysis" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Project%20Management/Project%20Planning%20and%20Scoping/Icon2.svg", text: "Project Roadmap and Timeline Development" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Project%20Management/Project%20Planning%20and%20Scoping/Icon3.svg", text: "Resource Allocation and Task Assignment" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Project%20Management/Project%20Planning%20and%20Scoping/Icon4.svg", text: "Risk Assessment and Mitigation Strategies" }
        ]
      },
      {
        title: "Agile Development",
        services: [
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Project%20Management/Agile%20Development/Icon1.svg", text: "Iterative Development and Sprints" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Project%20Management/Agile%20Development/Icon2.svg", text: "Scrum or Kanban Methodology Implementation" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Project%20Management/Agile%20Development/Icon3.svg", text: "Regular Progress Updates and Demos" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Project%20Management/Agile%20Development/Icon4.svg", text: "Continuous Improvement and Feedback Incorporation" }
        ]
      },
      {
        title: "Quality Assurance and Testing",
        services: [
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Project%20Management/Quality%20Assurance%20and%20Testing/Icon1.svg", text: "Test Planning and Execution" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Project%20Management/Quality%20Assurance%20and%20Testing/Icon2.svg", text: "Functional and Usability Testing" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Project%20Management/Quality%20Assurance%20and%20Testing/Icon3.svg", text: "Performance and Security Testing" },
          { icon: "https://shivshankar1201.sirv.com/digital-agency/Services/ServicesPage/Project%20Management/Quality%20Assurance%20and%20Testing/Icon4.svg", text: "Bug Tracking and Issue Resolution" }
        ]
      }
    ]
  };

  return (
    <div className="flex overflow-hidden flex-col items-center bg-zinc-900">
      <Navbar />
      <HeroSection />

      <ServiceCategory
        title={designServices.title}
        description={designServices.description}
        subcategories={designServices.subcategories}
      />

      <ServiceCategory
        title={engineeringServices.title}
        description={engineeringServices.description}
        subcategories={engineeringServices.subcategories}
      />

      <ServiceCategory
        title={projectManagementServices.title}
        description={projectManagementServices.description}
        subcategories={projectManagementServices.subcategories}
      />

      <CTASection />
      <Footer />
    </div>
  );
}

export default ServicesPage;