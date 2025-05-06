"use client";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Home/HeroSection";
import TrustedCompaniesSection from "../components/Home/TrustedCompaniesSection";
import ServicesSection from "../components/Home/ServiceSection";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import FAQSection from "../components/Home/FAQSection";
import ContactSection from "../components/Home/ContactSection";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center bg-zinc-900">
      <Navbar />
      <HeroSection />
      <TrustedCompaniesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default HomePage;