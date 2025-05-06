import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import FAQSection from "../components/Contact/FAQSection";
import CTASection from "../components/Contact/CTASection";
import Footer from "../components/Footer/Footer";

function ContactPage() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center bg-zinc-900">
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default ContactPage;
