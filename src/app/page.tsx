import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CarShowcaseSection from "@/components/sections/CarShowcaseSection";
import TeamSection from "@/components/sections/TeamSection";
import PartnershipSection from "@/components/sections/PartnershipSection";
import CareerSection from "@/components/sections/CareerSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CarShowcaseSection />
      <TeamSection />
      <PartnershipSection />
      <CareerSection />
      <SuccessStoriesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
