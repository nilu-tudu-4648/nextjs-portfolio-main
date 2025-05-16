"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Our Expertise",
    id: "expertise",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { skill: "Responsive Web Design", icon: "🖥️" },
          { skill: "E-commerce Development", icon: "🛒" },
          { skill: "Mobile App Development", icon: "📱" },
          { skill: "UI/UX Design", icon: "🎨" },
          { skill: "CMS Integration", icon: "📝" },
          { skill: "API Development", icon: "🔌" },
          { skill: "SEO Optimization", icon: "🔍" },
          { skill: "Performance Tuning", icon: "⚡" },
          { skill: "Database Design", icon: "🗄️" },
          { skill: "Cloud Hosting", icon: "☁️" },
          { skill: "Security Implementation", icon: "🔒" },
          { skill: "Maintenance & Support", icon: "🔧" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="bg-dark-200 p-3 rounded-lg flex items-center gap-2"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm sm:text-base">{item.skill}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Technologies",
    id: "technologies",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { name: "React.js", category: "Frontend" },
          { name: "Next.js", category: "Frontend" },
          { name: "Vue.js", category: "Frontend" },
          { name: "Node.js", category: "Backend" },
          { name: "Express", category: "Backend" },
          { name: "Django", category: "Backend" },
          { name: "MongoDB", category: "Database" },
          { name: "PostgreSQL", category: "Database" },
          { name: "Firebase", category: "Cloud" },
          { name: "AWS", category: "Cloud" },
          { name: "Tailwind CSS", category: "UI" },
          { name: "Figma", category: "Design" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-dark-200 p-3 rounded-lg"
          >
            <h3 className="text-white font-medium text-sm sm:text-base">{item.name}</h3>
            <p className="text-xs sm:text-sm text-primary-400">{item.category}</p>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Our Approach",
    id: "approach",
    content: (
      <div className="space-y-4">
        {[
          {
            title: "Client-Focused Development",
            description: "We prioritize your business goals and target audience in every decision we make, ensuring the final product aligns perfectly with your vision and objectives."
          },
          {
            title: "Agile Methodology",
            description: "Our development process is flexible and iterative, allowing for adjustments and improvements throughout the project lifecycle based on your feedback."
          },
          {
            title: "Quality Assurance",
            description: "We implement rigorous testing procedures to ensure your website or application is bug-free, secure, and performs optimally across all devices and browsers."
          },
          {
            title: "Ongoing Support",
            description: "Our relationship doesn't end at launch. We provide continuous support and maintenance to keep your digital presence running smoothly and securely."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-dark-200 p-4 rounded-lg"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-light-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("expertise");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About WebUmul Studios</h2>
          <div className="w-16 h-1.5 bg-primary-500 mx-auto mb-6"></div>
          <p className="section-subtitle">
            We&apos;re a team of passionate developers dedicated to helping small businesses succeed online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with design elements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 p-2 rounded-2xl shadow-xl">
              <div className="bg-dark-200 p-3 rounded-xl overflow-hidden">
                <Image
                  src="/images/about-image.png"
                  width={600}
                  height={600}
                  alt="About Me"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-500/10 rounded-full blur-xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-3xl font-bold text-white mb-5 font-poppins">Your Partner for Digital Success</h3>
            <p className="text-light-300 text-lg mb-6">
              WebUmul Studios is a premier web and mobile development company specializing in creating powerful digital solutions
              for small businesses. We understand the unique challenges that small businesses face in establishing an effective
              online presence, and we&apos;re here to help you overcome them.
            </p>
            <p className="text-light-300 text-lg mb-8">
              Founded in 2025, our team combines technical expertise with business acumen to deliver websites and applications
              that not only look great but also drive real business results. We believe that every small business deserves
              access to professional, high-quality web development services at affordable prices.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              <TabButton
                selectTab={() => handleTabChange("expertise")}
                active={tab === "expertise"}
              >
                Our Expertise
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("technologies")}
                active={tab === "technologies"}
              >
                Technologies
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("approach")}
                active={tab === "approach"}
              >
                Our Approach
              </TabButton>
            </div>

            {/* Tab Content */}
            <div className="mt-6 bg-dark-200/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl overflow-x-hidden">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
