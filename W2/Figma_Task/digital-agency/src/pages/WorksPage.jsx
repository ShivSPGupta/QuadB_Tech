import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Work/Hero";
import IntroSection from "../components/Work/IntroSection";
import ProjectsGrid from "../components/Work/ProjectsGrid";
import CTASection from "../components/Work/CTASection";

const WorksPage = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-zinc-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Section */}
      <div className="pt-10 sm:pt-16 md:pt-20 w-full max-w-screen-xl border border-solid border-[color:var(--Grey-15,#262626)]">
        {/* Introduction Section */}
        <IntroSection />

        {/* Projects Grid */}
        <ProjectsGrid />
      </div>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WorksPage;
