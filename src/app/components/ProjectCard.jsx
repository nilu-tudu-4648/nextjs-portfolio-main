import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tech = [] }) => {
  return (
    <motion.div
      className="card h-full flex flex-col overflow-hidden"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Project Image */}
      <div
        className="h-48 md:h-64 relative group overflow-hidden"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay with buttons */}
        <div className="absolute inset-0 bg-dark-300/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300 backdrop-blur-sm">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-200 p-3 rounded-full text-white hover:bg-primary-500 transition-colors duration-300"
              aria-label="View Code"
            >
              <CodeBracketIcon className="h-6 w-6" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-200 p-3 rounded-full text-white hover:bg-primary-500 transition-colors duration-300"
              aria-label="View Demo"
            >
              <EyeIcon className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex-1 flex flex-col p-6 bg-dark-200">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-light-300 text-sm mb-4 flex-grow">{description}</p>

        {/* Tech Stack */}
        {tech.length > 0 && (
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mt-2">
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="text-xs bg-dark-100 text-primary-400 px-2 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
