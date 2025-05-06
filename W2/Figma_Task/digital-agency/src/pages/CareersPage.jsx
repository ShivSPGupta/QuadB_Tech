import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Careers/HeroSection";
import WelcomeSection from "../components/Careers/WelcomeSection";
import BenefitsSection from "../components/Careers/BenefitsSection";
import JobOpeningsSection from "../components/Careers/JobOpeningsSection";
import CTASection from "../components/Careers/CTASection";
import Footer from "../components/Footer/Footer";

function CareersPage() {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-zinc-900">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <BenefitsSection />
      <JobOpeningsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default CareersPage;
