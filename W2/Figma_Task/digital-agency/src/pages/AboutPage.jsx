"use client";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/About/HeroSection";
import AboutSection from "../components/About/AboutSection";
import StorySection from "../components/About/StorySection";
import CTASection from "../components/About/CTASection";
import Footer from "../components/Footer/Footer";

function AboutPage() {
  return (
    <main className="flex overflow-hidden flex-col items-center bg-zinc-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StorySection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default AboutPage;