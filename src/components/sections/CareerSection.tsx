"use client";

import { motion } from "framer-motion";
import { AnimationService } from "@/utils/animations";
import { Briefcase, Users, TrendingUp, Globe } from "lucide-react";
import Card from "@/components/ui/Card";
import { useTheme } from "@/contexts/ThemeContext";

const CareerSection = () => {
  const { isDark } = useTheme();
  const careerBenefits = [
    {
      icon: Briefcase,
      title: "Exciting Projects",
      description:
        "Work on cutting-edge technologies and innovative solutions that make a real impact.",
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description:
        "Join a diverse team of passionate professionals who value creativity and teamwork.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Continuous learning opportunities and clear career progression paths.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Contribute to projects that reach users worldwide and drive digital transformation.",
    },
  ];

  const openPositions = [
    {
      title: "Flutter Developer",
      department: "Development",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
    {
      title: "MERN Stack Backend Developer",
      department: "Development",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
    {
      title: "Frontend Developer",
      department: "Development",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
    {
      title: "QA Engineer",
      department: "Quality Assurance",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
    {
      title: "Graphics Designer",
      department: "Design",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
    {
      title: "QA Engineer",
      department: "Quality Assurance",
      location: "BishalNagar, Kathmandu",
      type: "Full-time",
      experience: "Mid-level",
      status: "OPEN",
    },
  ];

  return (
    <section
      id="career"
      className={`py-20 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          {...AnimationService.getFadeInAnimation()}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            {...AnimationService.getSlideInAnimation("up")}
          >
            Join a Team That Builds
          </motion.h2>
          <motion.h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-300 mb-6"
            {...AnimationService.getSlideInAnimation("up", 0.1)}
          >
            Global solutions
          </motion.h3>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            {...AnimationService.getSlideInAnimation("up", 0.2)}
          >
            At Shrig Solutions, we don't just create digital solutions—we build
            careers. Join a team that values innovation, collaboration, and
            personal growth.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
            {...AnimationService.getSlideInAnimation("up", 0.3)}
          >
            Explore Open Positions
          </motion.button>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="mb-16"
          {...AnimationService.getFadeInAnimation(0.4)}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
            {...AnimationService.getSlideInAnimation("up")}
          >
            Why Join Shrig Solutions?
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerBenefits.map((benefit, index) => (
              <Card
                key={index}
                variant="glass"
                className="text-center p-6 border border-blue-500/20"
              >
                <motion.div
                  className="text-4xl mb-4 flex justify-center"
                  {...AnimationService.getFadeInAnimation(index * 0.1)}
                >
                  <benefit.icon className="text-blue-400" />
                </motion.div>
                <motion.h4
                  className="text-lg md:text-xl font-semibold text-white mb-3"
                  {...AnimationService.getSlideInAnimation("up", index * 0.1)}
                >
                  {benefit.title}
                </motion.h4>
                <motion.p
                  className="text-gray-300"
                  {...AnimationService.getSlideInAnimation(
                    "up",
                    index * 0.1 + 0.1
                  )}
                >
                  {benefit.description}
                </motion.p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          className="mb-16"
          {...AnimationService.getFadeInAnimation(0.6)}
        >
          <motion.div
            className="text-center mb-8"
            {...AnimationService.getSlideInAnimation("up")}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              CURRENT OPENINGS
            </h3>
            <p className="text-lg md:text-xl text-gray-300">We're hiring!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                variant="glass"
                className="p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <motion.div
                  {...AnimationService.getSlideInAnimation("up", index * 0.1)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-white">
                      {position.title}
                    </h4>
                    <span className="text-sm bg-green-600/20 text-green-300 px-2 py-1 rounded-full font-medium">
                      {position.status}
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-sm">📍</span>
                      <span className="text-sm">{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-sm">⏰</span>
                      <span className="text-sm">{position.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-sm">👤</span>
                      <span className="text-sm">{position.experience}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-300">
                    APPLY NOW
                  </button>
                </motion.div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          {...AnimationService.getFadeInAnimation(0.8)}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30"
            {...AnimationService.getSlideInAnimation("up")}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Team Today!
            </h3>
            <h4 className="text-2xl font-bold text-blue-300 mb-6">
              Be Part of Something Innovative and Impactful
            </h4>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              At Shrig Solutions, we believe in fostering talent and empowering
              individuals to thrive in a collaborative and dynamic environment.
              Join our passionate team and work on cutting-edge projects that
              make a real difference. If you're driven by innovation and eager
              to grow, we'd love to have you on board.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
              Apply Today
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
