"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AutoScrollSection from "@/components/sections/AutoScrollSection";
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
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Advanced Futuristic Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
        </div>

        {/* Floating particles with trails */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => {
            // Use deterministic values based on index to avoid hydration mismatch
            const seed = i * 0.1;
            const width = 1 + (Math.sin(seed) * 2 + 2);
            const height = 1 + (Math.cos(seed * 1.3) * 2 + 2);
            const hue = 200 + (Math.sin(seed * 0.7) * 30 + 30);
            const left = Math.sin(seed * 0.5) * 50 + 50;
            const top = Math.cos(seed * 0.8) * 50 + 50;
            const duration = 4 + (Math.sin(seed * 1.1) * 3 + 3);
            const delay = Math.sin(seed * 1.7) * 1.5 + 1.5;
            const shadow = 5 + (Math.sin(seed * 0.9) * 5 + 5);

            return (
              <div
                key={i}
                className="absolute rounded-full opacity-70"
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  background: `hsl(${hue}, 70%, 60%)`,
                  left: `${left}%`,
                  top: `${top}%`,
                  animation: `float ${duration}s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                  boxShadow: `0 0 ${shadow}px currentColor`,
                }}
              ></div>
            );
          })}
        </div>

        {/* Glowing orbs with movement */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      <Navigation />
      <HeroSection />
      <AutoScrollSection />
      <AboutSection />
      <ServicesSection />
      <CarShowcaseSection />
      <TeamSection />
      <PartnershipSection />
      <CareerSection />
      <SuccessStoriesSection />
      <ContactSection />
      <Footer />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-30px) rotate(180deg) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </main>
  );
}
