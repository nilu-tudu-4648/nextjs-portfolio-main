"use client";
import React from "react";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-1 lg:col-span-7 order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-primary-500 font-bold text-xl md:text-2xl mb-3">
              Professional Web & Mobile Development
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8 font-poppins">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                Elevate Your Small Business with
              </span>
              <br className="hidden sm:block" />
              <TypeAnimation
                sequence={[
                  "Custom Websites",
                  1500,
                  "Mobile Applications",
                  1500,
                  "E-commerce Solutions",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                className="text-white"
                repeat={Infinity}
              />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-light-300 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10"
          >
            WebUmul Studios specializes in creating affordable, high-impact websites and mobile applications
            for small businesses. Our tailored solutions help you stand out from competitors, attract more customers,
            and grow your business online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="#contact"
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              <span>Get Free Quote</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="#services"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Our Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              <div className="bg-dark-200/80 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-light-300 text-xs sm:text-sm">Affordable Pricing</span>
              </div>
              <div className="bg-dark-200/80 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-light-300 text-xs sm:text-sm">Fast Turnaround</span>
              </div>
              <div className="bg-dark-200/80 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-light-300 text-xs sm:text-sm">Ongoing Support</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-5 order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-2xl transform scale-110"></div>

            {/* Main illustration container */}
            <div className="relative bg-gradient-to-br from-primary-500/10 to-accent-500/10 p-4 rounded-2xl shadow-xl">
              <div className="bg-dark-200/60 backdrop-blur-sm rounded-xl p-4 overflow-hidden">
                <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                  {/* Mockup devices */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] md:w-[300px] z-20">
                    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                      {/* Laptop */}
                      <rect x="50" y="70" width="300" height="180" rx="8" fill="#1E1E1E" />
                      <rect x="70" y="90" width="260" height="140" rx="2" fill="#2563EB" />
                      <rect x="120" y="250" width="160" height="10" rx="4" fill="#1E1E1E" />

                      {/* Phone */}
                      <rect x="270" y="130" width="80" height="160" rx="10" fill="#1E1E1E" />
                      <rect x="275" y="140" width="70" height="130" rx="2" fill="#0EA5E9" />
                      <circle cx="310" cy="280" r="5" fill="#1E1E1E" />
                    </svg>
                  </div>

                  {/* Code elements */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute top-[20%] left-[5%] bg-dark-100/90 p-3 rounded-lg shadow-lg z-10"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-primary-400 font-mono">&lt;code/&gt;</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 left-0 sm:-left-10 bg-dark-200 p-2 sm:p-3 rounded-lg shadow-lg z-30"
            >
              <div className="flex items-center gap-2">
                <div className="bg-primary-500 h-3 w-3 rounded-full"></div>
                <span className="text-white text-sm font-medium">Responsive</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -top-6 right-0 sm:-right-6 bg-dark-200 p-2 sm:p-3 rounded-lg shadow-lg z-30"
            >
              <div className="flex items-center gap-2">
                <div className="bg-accent-500 h-3 w-3 rounded-full"></div>
                <span className="text-white text-sm font-medium">Modern Design</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
