"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const AboutSection = () => {
  const { isDark } = useTheme();
  const features = [
    {
      icon: Users,
      title: "Team Building",
      description:
        "We craft and manage top-tier tech teams that transform challenges into opportunities.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description:
        "Our expertise spans innovation, team building, and seamless project execution.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Ensuring solutions that drive growth and excellence in every project.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="about"
      className={`relative py-24 overflow-hidden transition-all duration-700 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-blue-50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-80"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(${
                  isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.05)"
                } 1px, transparent 1px),
                linear-gradient(90deg, ${
                  isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.05)"
                } 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            About Shrig Solutions
          </motion.div>
          <h2
            className={`text-5xl md:text-6xl font-bold font-poppins mb-6 transition-all duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transforming
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Challenges
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Into Opportunities
            </span>
          </h2>
          <p
            className={`text-xl md:text-2xl max-w-4xl mx-auto font-inter leading-relaxed transition-all duration-500 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            At Shrig Solutions, we craft and manage top-tier tech teams that
            transform challenges into opportunities. Our expertise spans
            innovation, team building, and seamless project execution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="flex items-start space-x-6 p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm border border-transparent hover:border-blue-200/20">
                    <div
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-bold font-poppins mb-3 transition-all duration-500 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`text-lg font-inter leading-relaxed transition-all duration-500 ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className={`relative rounded-3xl p-12 h-[500px] flex items-center justify-center overflow-hidden ${
                isDark
                  ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800"
                  : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
              }`}
            >
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
                <div
                  className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-10 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-400 rounded-full opacity-5 animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>

              <div className="relative z-10 text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-2xl"
                >
                  <Users className="w-16 h-16 text-white" />
                </motion.div>
                <div>
                  <h3
                    className={`text-3xl font-bold font-poppins mb-4 transition-all duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    From Vision to Reality
                  </h3>
                  <p
                    className={`text-xl font-inter transition-all duration-500 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Together we build the future
                  </p>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-30 blur-sm"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30 blur-sm"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
