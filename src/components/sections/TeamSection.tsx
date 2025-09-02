"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Users, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const TeamSection = () => {
  const { isDark } = useTheme();
  const teamMembers = [
    {
      name: "Kishor Bhandari",
      role: "Full Stack Engineer",
      team: "Team08",
      image: "/api/placeholder/200/200",
      linkedin: "#",
      github: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Suman Dhakal",
      role: "AI/ML Engineer",
      team: "Team09",
      image: "/api/placeholder/200/200",
      linkedin: "#",
      github: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Ashlesh Pandey",
      role: "Mobile App Developer",
      team: "Team07",
      image: "/api/placeholder/200/200",
      linkedin: "#",
      github: "#",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Dipesh Thapa Magar",
      role: "UI/UX Designer / WordPress Developer",
      team: "Team01",
      image: "/api/placeholder/200/200",
      linkedin: "#",
      github: "#",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Arjun Karki",
      role: "Graphics Designer",
      team: "Team02",
      image: "/api/placeholder/200/200",
      linkedin: "#",
      github: "#",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Subba Saheb Chaudhary",
      role: "DevOps Engineer",
      team: "Team03",
      image: "/api/placeholder/200/200",
      linkedin: "#",
      github: "#",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      name: "Utsav Shrestha",
      role: "Mobile App Developer",
      team: "Team04",
      image: "/api/placeholder/200/200",
      linkedin: "#",
      github: "#",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      name: "Suraj Paudel",
      role: "Mobile App Developer",
      team: "Team05",
      image: "/api/placeholder/200/200",
      linkedin: "#",
      github: "#",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Aman Rajbanshi",
      role: "QA Engineer",
      team: "Team06",
      image: "/api/placeholder/200/200",
      linkedin: "#",
      github: "#",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      name: "Raman Karki",
      role: "Full Stack Engineer",
      team: "Team10",
      image: "/api/placeholder/200/200",
      linkedin: "#",
      github: "#",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      name: "Atisha Thapa",
      role: "Frontend Developer",
      team: "Atisha",
      image: "/api/placeholder/200/200",
      linkedin: "#",
      github: "#",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section
      id="team"
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Users className="w-4 h-4" />
            Our Team
          </motion.div>

          <h2
            className={`text-5xl md:text-6xl font-bold font-poppins mb-6 transition-all duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Great teams make{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              great visions
            </span>{" "}
            possible
          </h2>
          <p
            className={`text-xl md:text-2xl max-w-4xl mx-auto font-inter leading-relaxed transition-all duration-500 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Meet the visionaries behind our innovative solutions
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`relative rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 border border-gray-700/50"
                    : "bg-gradient-to-br from-white via-gray-50 to-white border border-gray-100"
                } shadow-xl hover:shadow-2xl backdrop-blur-sm`}
              >
                {/* Team Badge */}
                <div className="text-center mb-6">
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-bold transition-all duration-500 ${
                      isDark
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700"
                    } shadow-lg`}
                  >
                    {member.team}
                  </span>
                </div>

                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  ></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src={`/images/team/${member.name
                        .toLowerCase()
                        .replace(" ", "-")}.svg`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                    <div
                      className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-3xl font-bold hidden`}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3
                    className={`text-xl font-bold font-poppins mb-3 transition-all duration-500 ${
                      isDark
                        ? "text-white group-hover:text-blue-400"
                        : "text-gray-900 group-hover:text-blue-600"
                    }`}
                  >
                    {member.name}
                  </h3>
                  <p
                    className={`font-inter text-base mb-6 transition-all duration-500 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 ${
                        isDark
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                          : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                      }`}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={member.github}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 ${
                        isDark
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                          : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                      }`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative rounded-3xl p-12 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
              <div
                className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="relative z-10 text-white">
              <h3 className="text-3xl font-bold font-poppins mb-4">
                Join Our Team Today!
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Be Part of Something Innovative and Impactful
              </p>
              <button className="group bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-2xl">
                <span>Apply Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
