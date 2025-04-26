"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Modern React Portfolio",
    description: "A sleek, responsive portfolio website built with React and Tailwind CSS.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nilu-tudu-4648",
    previewUrl: "/",
    tech: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    title: "Photography Showcase",
    description: "Professional photography portfolio with advanced image galleries and filtering.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nilu-tudu-4648",
    previewUrl: "/",
    tech: ["Next.js", "CSS Modules", "Cloudinary"]
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-featured online store with product management, cart, and checkout functionality.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nilu-tudu-4648",
    previewUrl: "/",
    tech: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 4,
    title: "Food Delivery App",
    description: "Mobile application for ordering food with real-time tracking and notifications.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nilu-tudu-4648",
    previewUrl: "/",
    tech: ["React Native", "Firebase", "Google Maps API"]
  },
  {
    id: 5,
    title: "Firebase Auth Template",
    description: "Ready-to-use authentication system with user management and role-based access control.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nilu-tudu-4648",
    previewUrl: "/",
    tech: ["React", "Firebase", "Redux"]
  },
  {
    id: 6,
    title: "Developer Roadmap",
    description: "Interactive guide for aspiring developers with learning resources and progress tracking.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nilu-tudu-4648",
    previewUrl: "/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-12 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-light-300 max-w-2xl mx-auto">
            Explore my recent work showcasing my expertise in web and mobile development
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="h-full"
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  tech={project.tech}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
