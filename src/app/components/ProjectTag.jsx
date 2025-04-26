import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      className={`
        px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
        ${isSelected
          ? "bg-primary-500 text-white shadow-md"
          : "bg-dark-200 text-light-300 hover:bg-dark-100 hover:text-white"
        }
      `}
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;
