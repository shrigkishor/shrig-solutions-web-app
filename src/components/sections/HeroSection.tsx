"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const HeroSection = () => {
  const { isDark } = useTheme();
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-700 ${
        isDark
          ? "bg-gradient-to-br from-[#0A0F1B] via-[#1A1F2B] to-[#0A0F1B]"
          : "bg-gradient-to-br from-blue-50 via-white via-indigo-50 to-blue-100"
      }`}
    >
      {/* Futuristic Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(${
              isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.08)"
            } 1px, transparent 1px),
            linear-gradient(90deg, ${
              isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.08)"
            } 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Animated scanning lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40 animate-pulse"></div>
        <div
          className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Enhanced Animated Data Flow Visualization */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-32">
          <div
            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-1 h-1 bg-blue-300 rounded-full animate-bounce opacity-40"
            style={{ animationDelay: "0.5s", animationDuration: "2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-80"
            style={{ animationDelay: "1s", animationDuration: "1.5s" }}
          ></div>
        </div>

        {/* Data flow lines */}
        <div className="absolute top-1/3 left-1/3 w-96 h-32">
          <svg width="100%" height="100%" viewBox="0 0 400 128" fill="none">
            <path
              d="M20 100 L80 80 L140 60 L200 40 L260 20 L320 10 L380 5"
              stroke={isDark ? "#3B82F6" : "#1D4ED8"}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8,8"
              className="animate-pulse"
            />
            <path
              d="M10 110 L70 90 L130 70 L190 50 L250 30 L310 15 L370 8"
              stroke={isDark ? "#60A5FA" : "#3B82F6"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="5,5"
              opacity="0.7"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </svg>
        </div>

        {/* Lower data flow */}
        <div className="absolute bottom-1/3 right-1/3 w-96 h-32">
          <svg width="100%" height="100%" viewBox="0 0 400 128" fill="none">
            <path
              d="M20 100 L80 80 L140 60 L200 40 L260 20 L320 10 L380 5"
              stroke={isDark ? "#3B82F6" : "#1D4ED8"}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8,8"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <path
              d="M10 110 L70 90 L130 70 L190 50 L250 30 L310 15 L370 8"
              stroke={isDark ? "#60A5FA" : "#3B82F6"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="5,5"
              opacity="0.7"
              className="animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Main Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight tracking-wide transition-all duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                BRIDGING GLOBAL
              </span>
              <span className="block tracking-wider bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                TALENT AND
              </span>
              <span className="block tracking-wider bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                INNOVATION
              </span>
            </motion.h1>
          </div>

          {/* Descriptive Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={`text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-inter font-light leading-relaxed transition-all duration-500 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">
              Driving success
            </span>{" "}
            through seamless partnerships, unmatched expertise, and a passion
            for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-medium">
              delivering innovative solutions.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12"
          >
            {/* Explore Our Services Button */}
            <button
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-110 flex items-center gap-4 shadow-2xl hover:shadow-blue-500/25"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <span className="relative z-10">Explore Our Services</span>
              <ArrowUpRight
                size={20}
                className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
              />
            </button>

            {/* Join Our Team Button */}
            <button
              onClick={() => {
                const careerSection = document.getElementById("career");
                if (careerSection) {
                  careerSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className={`group relative border-2 px-8 py-4 rounded-full text-lg font-bold transition-all duration-500 transform hover:scale-110 flex items-center gap-4 backdrop-blur-sm ${
                isDark
                  ? "border-white text-white hover:bg-white hover:text-gray-900"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {/* Button glow effect */}
              <div
                className={`absolute inset-0 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                  isDark ? "bg-white" : "bg-blue-600"
                }`}
              ></div>
              <span className="relative z-10">Join Our Team</span>
              <ArrowUpRight
                size={20}
                className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
              />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
