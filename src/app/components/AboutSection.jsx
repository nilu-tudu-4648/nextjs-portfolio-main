"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { skill: "JavaScript", icon: "💻" },
          { skill: "React.js", icon: "⚛️" },
          { skill: "Next.js", icon: "🔄" },
          { skill: "Node.js", icon: "🟢" },
          { skill: "Express", icon: "🚂" },
          { skill: "PostgreSQL", icon: "🐘" },
          { skill: "MongoDB", icon: "🍃" },
          { skill: "HTML/CSS", icon: "🎨" },
          { skill: "Tailwind CSS", icon: "🌊" },
          { skill: "Git", icon: "🔄" },
          { skill: "RESTful APIs", icon: "🔌" },
          { skill: "TypeScript", icon: "📘" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="bg-dark-200 p-3 rounded-lg flex items-center gap-2"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.skill}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        {[
          {
            institution: "Fullstack Academy of Code",
            degree: "Web Development Bootcamp",
            years: "2020 - 2021",
            description: "Intensive full-stack web development program focusing on JavaScript, React, Node.js, and more."
          },
          {
            institution: "University of California, Santa Cruz",
            degree: "Bachelor of Science in Computer Science",
            years: "2016 - 2020",
            description: "Focused on software engineering, algorithms, and data structures."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-dark-200 p-4 rounded-lg"
          >
            <h3 className="text-lg font-semibold text-white">{item.institution}</h3>
            <p className="text-primary-400">{item.degree}</p>
            <p className="text-sm text-light-300">{item.years}</p>
            <p className="mt-2 text-light-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        {[
          {
            name: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2022",
            icon: "☁️"
          },
          {
            name: "Google Professional Cloud Developer",
            issuer: "Google Cloud",
            date: "2021",
            icon: "🌩️"
          },
          {
            name: "React Developer Certification",
            issuer: "Meta",
            date: "2023",
            icon: "⚛️"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-dark-200 p-4 rounded-lg flex items-start gap-3"
          >
            <div className="text-2xl">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <p className="text-primary-400">{item.issuer}</p>
              <p className="text-sm text-light-300">{item.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-12 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-light-300 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
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
            <h3 className="text-2xl font-bold text-white mb-4">Full Stack Developer & UI/UX Enthusiast</h3>
            <p className="text-light-300 mb-6">
              I am a passionate full stack developer with expertise in creating modern, responsive web applications.
              With a strong foundation in JavaScript, React, and Node.js, I build seamless user experiences that combine
              elegant frontend design with robust backend functionality.
            </p>
            <p className="text-light-300 mb-8">
              My approach combines technical excellence with creative problem-solving. I'm dedicated to writing clean,
              maintainable code and staying current with emerging technologies. Whether working independently or as part
              of a team, I'm committed to delivering high-quality solutions that exceed expectations.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>

            {/* Tab Content */}
            <div className="mt-6 bg-dark-200/50 backdrop-blur-sm p-6 rounded-xl">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
