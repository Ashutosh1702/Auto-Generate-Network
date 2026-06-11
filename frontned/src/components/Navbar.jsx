import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Products & Services", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "SEO", href: "#" },
    { name: "Latest Work", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Log In", href: "#" },
  ];

  return (
    <>
      {/* Top Bar with social icons and contacts */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between h-10 text-gray-300 text-xs">
          {/* Social icons grouped */}
          <div className="flex items-center space-x-3.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaFacebookF size={15} className="text-[#1877F2]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaInstagram size={15} className="text-[#E1306C]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaTwitter size={15} className="text-[#1DA1F2]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaYoutube size={15} className="text-[#FF0000]" />
            </a>
          </div>

          {/* Contact numbers grouped */}
          <div className="flex items-center space-x-4">
            <span className="flex items-center hover:text-white transition-colors">
              <FiPhone className="mr-1 text-indigo-400" />
              Sales: 07947906789
            </span>
            <span className="flex items-center hover:text-white transition-colors">
              <FiPhone className="mr-1 text-indigo-400" />
              Customer Services: 0172655556
            </span>
          </div>
        </div>
      </motion.header>

      {/* Main Navigation Bar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-12 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-[#050816]/80 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <img
                src="https://www.autogaragenetwork.com/catalog/view/theme/avnv1/assets/img/logo-color.png"
                alt="AG Network Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-grow items-center justify-between mx-6 lg:mx-10 xl:mx-16">
              {navLinks.map((link) => {
                const isLogIn = link.name === "Log In";
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={
                      isLogIn
                        ? "text-[11px] lg:text-xs xl:text-sm font-bold text-white bg-white/5 hover:bg-indigo-600/10 border border-white/10 hover:border-indigo-500/50 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap shadow-[0_0_15px_rgba(79,70,229,0.1)]"
                        : "text-[11px] lg:text-xs xl:text-sm font-semibold text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                    }
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs lg:text-sm font-semibold px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all whitespace-nowrap"
              >
                Book Free Demo
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#111827] border-b border-white/10"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => {
                  const isLogIn = link.name === "Log In";
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={
                        isLogIn
                          ? "block text-center text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-2.5 mt-2 transition-all duration-300"
                          : "block text-base font-medium text-gray-300 hover:text-white"
                      }
                    >
                      {link.name}
                    </a>
                  );
                })}
                <div className="pt-4 border-t border-white/10">
                  <button className="w-full bg-indigo-600 text-white font-semibold px-5 py-3 rounded-lg">
                    Book Free Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
