"use client";

import { motion } from "framer-motion";
import { Car, Zap, Shield, Wifi } from "lucide-react";

const CarShowcaseSection = () => {
  const carFeatures = [
    {
      icon: Car,
      title: "Smart Mobility",
      description:
        "Next-generation automotive solutions with AI-powered navigation and autonomous driving capabilities.",
    },
    {
      icon: Zap,
      title: "Electric Innovation",
      description:
        "Sustainable electric vehicle technology with advanced battery management systems.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Advanced safety features including collision detection and emergency response systems.",
    },
    {
      icon: Wifi,
      title: "Connected Cars",
      description:
        "IoT-enabled vehicles with real-time data analytics and cloud connectivity.",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-poppins mb-6">
            Automotive Technology Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-inter max-w-3xl mx-auto">
            Driving the future of transportation with cutting-edge automotive
            solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Car Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8">
              <img
                src="/images/cars/tech-car.svg"
                alt="Technology Car"
                className="w-full h-auto"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {carFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white font-poppins mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-inter">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Explore Automotive Solutions
            </motion.button>
          </motion.div>
        </div>

        {/* Additional Cars Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[1, 2, 3].map((car) => (
            <div
              key={car}
              className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <Car className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white font-poppins mb-2">
                Smart Car Model {car}
              </h3>
              <p className="text-gray-300 font-inter text-sm">
                Advanced automotive technology with cutting-edge features and
                sustainable design.
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CarShowcaseSection;
