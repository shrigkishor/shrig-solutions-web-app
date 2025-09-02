"use client";

import { motion } from "framer-motion";
import { AnimationService } from "@/utils/animations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "AquaBuildr",
      description: "Aquabuildr is your ultimate tool for aquarium management, designed for enthusiasts of all levels",
      image: "/images/media/aquabuildr.svg",
      category: "Web Application",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Saro",
      description: "Fast and Fun way to share the moment with your friends and family.",
      image: "/images/media/saro.svg",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "AWS"],
    },
    {
      title: "Jerry Crush",
      description: "A matchmaking game made in Unity",
      image: "/images/media/jerry-crush.svg",
      category: "Game Development",
      technologies: ["Unity", "C#", "Blender"],
    },
    {
      title: "FlyCar Fantasy",
      description: "3D Game",
      image: "/images/media/flycar-fantasy.svg",
      category: "3D Game",
      technologies: ["Unity", "C#", "3D Modeling"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navigation />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          {...AnimationService.getFadeInAnimation()}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            {...AnimationService.getSlideInAnimation("up")}
          >
            Case studies
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8"
            {...AnimationService.getSlideInAnimation("up", 0.2)}
          >
            Our Success Stories
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            {...AnimationService.getSlideInAnimation("up", 0.4)}
          >
            Discover real-world examples of our innovative solutions driving results. 
            From transforming business processes to delivering exceptional digital experiences, 
            our case studies showcase the impact of our work across diverse industries.
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          {...AnimationService.getStaggeredAnimation(0.1)}
        >
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              variant="glass"
              className="group overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <motion.div
                className="relative"
                {...AnimationService.getFadeInAnimation(index * 0.2)}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-24 h-24 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden text-6xl opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                    {study.title === "AquaBuildr" && "🐠"}
                    {study.title === "Saro" && "📱"}
                    {study.title === "Jerry Crush" && "🎮"}
                    {study.title === "FlyCar Fantasy" && "🚗"}
                  </div>
                </div>

                {/* Project Info */}
                <motion.div
                  {...AnimationService.getSlideInAnimation("up", index * 0.2)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-400 font-medium">
                      {study.category}
                    </span>
                    <div className="flex space-x-2">
                      {study.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {study.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-700/50 text-gray-400 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-300">
                      View Details →
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </Card>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          {...AnimationService.getFadeInAnimation(1)}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30"
            {...AnimationService.getSlideInAnimation("up")}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with innovative solutions and proven results.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
              Get Started Today
            </button>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default CaseStudiesPage;
