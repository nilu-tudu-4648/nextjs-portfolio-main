"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Bloom Boutique",
    description: "E-commerce website for a local fashion boutique with online ordering and inventory management.",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "E-commerce"],
    gitUrl: "#",
    previewUrl: "/",
    tech: ["React", "Node.js", "Stripe", "MongoDB"]
  },
  {
    id: 2,
    title: "Local Eats Cafe",
    description: "Restaurant website with online ordering, reservation system, and menu management.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Food"],
    gitUrl: "#",
    previewUrl: "/",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS"]
  },
  {
    id: 3,
    title: "Wellness Center",
    description: "Appointment booking system and service showcase for a local wellness and spa center.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Health"],
    gitUrl: "#",
    previewUrl: "/",
    tech: ["React", "Node.js", "PostgreSQL", "Calendly API"]
  },
  {
    id: 4,
    title: "Paws & Claws",
    description: "Pet shop e-commerce platform with subscription service for pet food and supplies.",
    image: "/images/projects/4.png",
    tag: ["All", "Web", "E-commerce"],
    gitUrl: "#",
    previewUrl: "/",
    tech: ["React", "Firebase", "Stripe", "Redux"]
  },
  {
    id: 5,
    title: "City Plumbing",
    description: "Service booking website for a local plumbing company with emergency request feature.",
    image: "/images/projects/5.png",
    tag: ["All", "Web", "Service"],
    gitUrl: "#",
    previewUrl: "/",
    tech: ["WordPress", "WooCommerce", "Custom PHP"]
  },
  {
    id: 6,
    title: "FreshGrocer",
    description: "Mobile app for a local grocery store with delivery tracking and loyalty program.",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile", "E-commerce"],
    gitUrl: "#",
    previewUrl: "/",
    tech: ["React Native", "Firebase", "Google Maps API"]
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
