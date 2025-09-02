"use client";

import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "@/hooks/useNavigation";
import { AnimationService } from "@/utils/animations";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useRouter, usePathname } from "next/navigation";
import ShrigLogo from "@/components/ui/ShrigLogo";

const Navigation = () => {
  const { isOpen, activeItem, toggleMenu, closeMenu, navigationItems } =
    useNavigation();
  const { isDark, toggleTheme } = useTheme();
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourceDropdownOpen, setResourceDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Function to handle navigation with proper routing
  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      // If we're not on the home page, navigate to home first, then to the section
      if (pathname !== "/") {
        router.push(`/${href}`);
      } else {
        // If we're on home page, just scroll to the section
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // For external links, use router.push
      router.push(href);
    }
  };

  const aboutDropdownItems = [
    { name: "Our Company", href: "#company" },
    { name: "Our Team", href: "#team" },
    { name: "Our Partnership", href: "/#partnership" },
  ];

  const resourceDropdownItems = [
    { name: "Case studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
        setResourceDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-r from-[#0A0F1B] via-[#1A1F2B] to-[#0A0F1B] border-b border-blue-500/20 backdrop-blur-xl"
          : "bg-gradient-to-r from-white/95 via-blue-50/80 to-white/95 border-b border-blue-200/50 backdrop-blur-xl"
      }`}
    >
      {/* Futuristic grid pattern overlay */}
      <div className="absolute inset-0 opacity-30">
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
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Animated scanning line */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 animate-pulse`}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center"
            {...AnimationService.getFadeInAnimation()}
          >
            <div
              className={`h-10 w-auto group relative transition-all duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <ShrigLogo
                className="h-10 w-auto transition-all duration-500 group-hover:scale-105"
                alt="Shrig Solutions"
                isDark={isDark}
              />
              {/* Logo glow effect */}
              <div
                className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                  isDark ? "bg-blue-400" : "bg-blue-600"
                }`}
              ></div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 relative group">
              {/* Navigation glow effect */}
              <div
                className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                  isDark ? "bg-blue-500/20" : "bg-blue-400/20"
                }`}
              ></div>
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  {...AnimationService.getFadeInAnimation(index * 0.1)}
                >
                  {item.name === "About" ? (
                    <div className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                          isDark
                            ? `text-white ${
                                aboutDropdownOpen
                                  ? "text-white"
                                  : "text-gray-300"
                              }`
                            : `text-gray-700 ${
                                aboutDropdownOpen
                                  ? "text-blue-600"
                                  : "text-gray-700"
                              }`
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          size={12}
                          className={`ml-1 transition-transform duration-200 ${
                            aboutDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {/* Active indicator line - only show when dropdown is open AND item is active */}
                      {aboutDropdownOpen && activeItem === "about" && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00BFFF]"></div>
                      )}

                      {/* About Dropdown */}
                      <AnimatePresence>
                        {aboutDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`absolute top-full left-0 mt-2 w-48 border rounded-md shadow-lg z-50 transition-colors duration-300 ${
                              isDark
                                ? "bg-black border-gray-800"
                                : "bg-white border-gray-200"
                            }`}
                          >
                            <div className="py-2">
                              {aboutDropdownItems.map(
                                (dropdownItem, dropdownIndex) => (
                                  <motion.a
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                      isDark
                                        ? "text-white hover:bg-gray-900"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                    onClick={() => setAboutDropdownOpen(false)}
                                    {...AnimationService.getFadeInAnimation(
                                      dropdownIndex * 0.1
                                    )}
                                  >
                                    {dropdownItem.name}
                                  </motion.a>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item.name === "Resource" ? (
                    <div className="relative" ref={dropdownRef}>
                      <button
                        onClick={() =>
                          setResourceDropdownOpen(!resourceDropdownOpen)
                        }
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                          isDark
                            ? `text-white ${
                                resourceDropdownOpen
                                  ? "text-white"
                                  : "text-gray-300"
                              }`
                            : `text-gray-700 ${
                                resourceDropdownOpen
                                  ? "text-blue-600"
                                  : "text-gray-700"
                              }`
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          size={12}
                          className={`ml-1 transition-transform duration-200 ${
                            resourceDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {/* Active indicator line - only show when dropdown is open AND item is active */}
                      {resourceDropdownOpen && activeItem === "resource" && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00BFFF]"></div>
                      )}

                      {/* Resource Dropdown */}
                      <AnimatePresence>
                        {resourceDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`absolute top-full left-0 mt-2 w-48 border rounded-md shadow-lg z-50 transition-colors duration-300 ${
                              isDark
                                ? "bg-black border-gray-800"
                                : "bg-white border-gray-200"
                            }`}
                          >
                            <div className="py-2">
                              {resourceDropdownItems.map(
                                (dropdownItem, dropdownIndex) => (
                                  <motion.a
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                      isDark
                                        ? "text-white hover:bg-gray-900"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                    onClick={() =>
                                      setResourceDropdownOpen(false)
                                    }
                                    {...AnimationService.getFadeInAnimation(
                                      dropdownIndex * 0.1
                                    )}
                                  >
                                    {dropdownItem.name}
                                  </motion.a>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative ${
                          isDark
                            ? `text-white ${
                                activeItem === item.href.replace("#", "")
                                  ? "text-blue-300"
                                  : "text-gray-300"
                              }`
                            : `text-gray-700 ${
                                activeItem === item.href.replace("#", "")
                                  ? "text-blue-600"
                                  : "text-gray-700"
                              }`
                        }`}
                      >
                        {item.name}
                      </button>
                      {/* Active indicator line */}
                      {activeItem === item.href.replace("#", "") && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00BFFF]"></div>
                      )}
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            {...AnimationService.getFadeInAnimation(0.6)}
          >
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 uppercase tracking-wide shadow-lg">
              <span className="relative z-10">CONTACT US</span>
            </button>
          </motion.div>

          {/* Theme Toggle Button */}
          <motion.div
            className="hidden md:block"
            {...AnimationService.getFadeInAnimation(0.65)}
          >
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                isDark
                  ? "bg-white/10 border-white/20 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-700"
              }`}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-300" />
              ) : (
                <Moon size={20} className="text-blue-600" />
              )}
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden"
            {...AnimationService.getFadeInAnimation(0.7)}
          >
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${
                isDark ? "text-white" : "text-gray-700"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t transition-colors duration-300 ${
              isDark
                ? "bg-[#0A0F1B] border-gray-800"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  {...AnimationService.getSlideInAnimation(
                    "right",
                    index * 0.1
                  )}
                >
                  {item.name === "About" ? (
                    <div>
                      <button
                        onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                        className="w-full text-left px-3 py-2 text-base font-medium text-white flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            aboutDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {aboutDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`ml-4 border-l transition-colors duration-300 ${
                              isDark ? "border-gray-700" : "border-gray-300"
                            }`}
                          >
                            {aboutDropdownItems.map(
                              (dropdownItem, dropdownIndex) => (
                                <motion.a
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className={`block px-3 py-2 text-sm transition-colors duration-200 ${
                                    isDark ? "text-gray-300" : "text-gray-600"
                                  }`}
                                  onClick={() => {
                                    setAboutDropdownOpen(false);
                                    closeMenu();
                                  }}
                                  {...AnimationService.getFadeInAnimation(
                                    dropdownIndex * 0.1
                                  )}
                                >
                                  {dropdownItem.name}
                                </motion.a>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item.name === "Resource" ? (
                    <div>
                      <button
                        onClick={() =>
                          setResourceDropdownOpen(!resourceDropdownOpen)
                        }
                        className={`w-full text-left px-3 py-2 text-base font-medium flex items-center justify-between ${
                          isDark ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            resourceDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {resourceDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`ml-4 border-l transition-colors duration-300 ${
                              isDark ? "border-gray-700" : "border-gray-300"
                            }`}
                          >
                            {resourceDropdownItems.map(
                              (dropdownItem, dropdownIndex) => (
                                <motion.a
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className={`block px-3 py-2 text-sm transition-colors duration-200 ${
                                    isDark ? "text-gray-300" : "text-gray-600"
                                  }`}
                                  onClick={() => {
                                    setResourceDropdownOpen(false);
                                    closeMenu();
                                  }}
                                  {...AnimationService.getFadeInAnimation(
                                    dropdownIndex * 0.1
                                  )}
                                >
                                  {dropdownItem.name}
                                </motion.a>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        handleNavigation(item.href);
                        closeMenu();
                      }}
                      className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        isDark
                          ? `text-white ${
                              activeItem === item.href.replace("#", "")
                                ? "text-white bg-gray-800"
                                : ""
                            }`
                          : `text-gray-700 ${
                              activeItem === item.href.replace("#", "")
                                ? "text-blue-600 bg-blue-50"
                                : ""
                            }`
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </motion.div>
              ))}
              <motion.button
                className="w-full mt-4 bg-gradient-to-r from-[#4A90E2] to-[#1A50A0] text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 uppercase tracking-wide"
                {...AnimationService.getSlideInAnimation("right", 0.6)}
              >
                CONTACT US
              </motion.button>

              {/* Mobile Theme Toggle */}
              <motion.div
                className="flex justify-center mt-4"
                {...AnimationService.getSlideInAnimation("right", 0.7)}
              >
                <button
                  onClick={toggleTheme}
                  className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-200 flex items-center gap-2 ${
                    isDark
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-700"
                  }`}
                  aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                >
                  {isDark ? (
                    <>
                      <Sun size={18} className="text-yellow-300" />
                      <span className="text-sm">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon size={18} className="text-blue-600" />
                      <span className="text-sm">Dark Mode</span>
                    </>
                  )}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
