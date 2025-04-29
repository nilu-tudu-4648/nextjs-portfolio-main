"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavLink = ({ href, title, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the section element that corresponds to this link
      const section = document.querySelector(href);
      if (!section) return;

      // Get the position of the section
      const rect = section.getBoundingClientRect();

      // Check if the section is in view (with some buffer)
      const isInView = rect.top <= 200 && rect.bottom >= 200;
      setIsActive(isInView);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [href]);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative py-2 px-1 text-base md:text-sm lg:text-base font-medium transition-colors duration-300 ${
        isActive ? "text-white" : "text-light-300 hover:text-white"
      }`}
    >
      {title}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
          isActive ? "w-full" : "w-0"
        }`}
      />
    </Link>
  );
};

export default NavLink;
