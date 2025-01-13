// App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientsSection from "./components/ClientsSection";
import AboutSection from "./components/AboutSection";
import WhyUsSection from "./components/WhyUsSection";
import SkillsSection from "./components/SkillsSection";
import ServicesSection from "./components/ServicesSection";
import CallToActionSection from "./components/CallToActionSection";
import PortfolioSection from "./components/PortfolioSection";
import TeamSection from "./components/TeamSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function () {
  return (
    <>
      <Navbar />
      <Hero />
      <ClientsSection />
      <AboutSection />
      <WhyUsSection />
      <SkillsSection />
      <ServicesSection />
      <CallToActionSection />
      <PortfolioSection />
      <TeamSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
