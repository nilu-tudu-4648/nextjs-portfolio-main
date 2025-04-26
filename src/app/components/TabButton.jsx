import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-primary-500 text-white shadow-md"
          : "bg-dark-200 text-light-300 hover:bg-dark-100 hover:text-white"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default TabButton;
