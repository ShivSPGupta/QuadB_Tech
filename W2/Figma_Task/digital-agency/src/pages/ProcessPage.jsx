"use client";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Process/HeroSection";
import IntroSection from "../components/Process/IntroSection";
import ProcessSteps from "../components/Process/ProcessSteps";
import ContactSection from "../components/Process/ContactSection";
import Footer from "../components/Footer/Footer";

function ProcessPage() {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-zinc-900">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <ProcessSteps />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default ProcessPage;