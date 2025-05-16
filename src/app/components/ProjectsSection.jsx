"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Johar 11",
    description: "Johar11: Fantasy sports app for team building",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nilesh98/johar11",
    previewUrl: "https://play.google.com/store/apps/details?id=com.nilesh98.johar11",
    tech: ["React Native", "Node.js", "Firebase"]
  },
  {
    id: 2,
    title: "Gyan Sarovar Library",
    description: "Gyan Sarovar is a user-friendly app designed for seamless library management.",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nilesh98/johar11",
    previewUrl: "https://play.google.com/store/apps/details?id=com.gyansarovar.app",
    tech: ["React Native", "Node.js", "Firebase"]
  },
  {
    id: 3,
    title: "Hostel Easy",
    description: "Hostel Easy is a user-friendly app designed for seamless hostel management.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nilesh98/johar11",
    previewUrl: "https://play.google.com/store/apps/details?id=com.nilesh98.Trip_Planner",
    tech: ["React Native", "Node.js", "Firebase"]
  },
  {
    id: 4,
    title: "Sayas",
    description: "Sayas is a user-friendly app designed for seamless hostel management.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nilesh98/johar11",
    previewUrl: "https://play.google.com/store/apps/details?id=com.sayas",
    tech: ["React Native", "Node.js", "Firebase"]
  },
  {
    id: 5,
    title: "Painpal+",
    description: "Painpal+ is a user-friendly app designed for seamless pain management.",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile","Health"],
    gitUrl: "https://github.com/nilesh98/johar11",
    previewUrl: "https://play.google.com/store/apps/details?id=com.cogniant.painpalapp",
    tech: ["React Native", "Node.js", "Firebase"]
  },
  {
    id: 6,
    title: "Boongg Admin App",
    description: "Boongg Admin App is a user-friendly app designed for seamless admin management.",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nilesh98/johar11",
    previewUrl: "https://play.google.com/store/apps/details?id=com.nilesh98.Boongg_Admin_App",
    tech: ["React Native", "Node.js", "Firebase"]
  },
  {
    id: 7,
    title: "Inland World",
    description: "Inland World is a user-friendly app designed for seamless admin management.",
    image: "/images/projects/7.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nilesh98/johar11",
    previewUrl: "https://play.google.com/store/search?q=inland+world+logistics+pvt+ltd&c=apps",
    tech: ["React Native", "Node.js", "Firebase"]
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
          <h2 className="section-title">Our Client Work</h2>
          <div className="w-16 h-1.5 bg-primary-500 mx-auto mb-6"></div>
          <p className="section-subtitle">
            Explore our recent projects for small businesses across various industries
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
          <ProjectTag
            onClick={handleTagChange}
            name="E-commerce"
            isSelected={tag === "E-commerce"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Service"
            isSelected={tag === "Service"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Food"
            isSelected={tag === "Food"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Health"
            isSelected={tag === "Health"}
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
