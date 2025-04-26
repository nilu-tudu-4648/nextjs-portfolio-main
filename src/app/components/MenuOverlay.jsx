import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import { motion } from "framer-motion";

const MenuOverlay = ({ links }) => {
  return (
    <div className="p-6">
      <ul className="flex flex-col space-y-6 items-center">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="w-full text-center"
          >
            <NavLink href={link.path} title={link.title} />
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: links.length * 0.1 }}
          className="w-full"
        >
          <Link
            href="#contact"
            className="btn-primary block text-center w-full mt-4"
          >
            Hire Me
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default MenuOverlay;
