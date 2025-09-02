"use client";

import { motion } from "framer-motion";
import { AnimationService } from "@/utils/animations";
import { useTheme } from "@/contexts/ThemeContext";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const ServicesSection = () => {
  const { isDark } = useTheme();
  const services = [
    {
      title: "Custom AI Development",
      description:
        "Tailored artificial intelligence solutions to automate and optimize your business processes.",
      icon: "🤖",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms.",
      icon: "📱",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      title: "Chatbots & Virtual Assistants",
      description:
        "Intelligent conversational AI to enhance customer engagement and support.",
      icon: "💬",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      title: "Web Development",
      description:
        "Custom web applications and responsive websites built with modern technologies.",
      icon: "🌐",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create exceptional user experiences.",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
    },
    {
      title: "Enterprise Software Solutions",
      description:
        "Scalable enterprise-grade software tailored to your business needs.",
      icon: "🏢",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
    },
    {
      title: "IT Consulting & Strategy",
      description:
        "Strategic technology consulting to drive digital transformation.",
      icon: "💼",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment solutions for modern applications.",
      icon: "☁️",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      title: "Data Analytics & Insights",
      description:
        "Data-driven insights and analytics to inform business decisions.",
      icon: "📊",
      gradient: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-50 to-green-50",
    },
    {
      title: "E-commerce Development",
      description: "Complete e-commerce solutions for online business growth.",
      icon: "🛒",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
    },
  ];

  return (
    <section
      id="services"
      className={`relative py-24 overflow-hidden transition-all duration-700 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-blue-50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div
          className="absolute top-40 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-80"
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
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          {...AnimationService.getFadeInAnimation()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4" />
            Our Services
          </motion.div>

          <motion.h2
            className={`text-5xl md:text-6xl font-bold font-poppins mb-6 transition-all duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            {...AnimationService.getSlideInAnimation("up")}
          >
            Your technology{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              partner
            </span>{" "}
            for
          </motion.h2>

          <motion.h3
            className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text font-poppins mb-8"
            {...AnimationService.getSlideInAnimation("up", 0.1)}
          >
            Seamless Project Execution
          </motion.h3>

          <motion.p
            className={`text-xl md:text-2xl max-w-3xl mx-auto font-inter leading-relaxed mb-10 transition-all duration-500 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            {...AnimationService.getSlideInAnimation("up", 0.2)}
          >
            We deliver cutting-edge solutions that drive innovation and
            accelerate your business growth
          </motion.p>

          <motion.button
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-2xl hover:shadow-blue-500/25"
            {...AnimationService.getSlideInAnimation("up", 0.3)}
          >
            <span>Let's talk</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`relative rounded-3xl p-8 h-full transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 border border-gray-700/50"
                    : `bg-gradient-to-br ${service.bgGradient} border border-gray-100`
                } shadow-xl hover:shadow-2xl backdrop-blur-sm`}
              >
                {/* Service Icon */}
                <div className="mb-6">
                  <div
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all duration-500`}
                  >
                    {service.icon}
                    {/* Icon glow effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold font-poppins mb-4 transition-all duration-500 ${
                    isDark
                      ? "text-white group-hover:text-blue-400"
                      : "text-gray-900 group-hover:text-blue-600"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`font-inter leading-relaxed text-base transition-all duration-500 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowRight
                    className={`w-5 h-5 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
