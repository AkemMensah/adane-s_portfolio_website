"use client";

import { createElement, useState, useEffect } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { navItems } from "../data";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  // Close menu when a link is clicked
  const handleNavClick = (index: number) => {
    setActive(index);
    setShowMenu(false);
  };

  return (
    <div className="relative w-full flex justify-center">
      {/* Menu toggle button */}
      <button
        aria-label={showMenu ? "Close Menu" : "Open Menu"}
        aria-expanded={showMenu}
        className={`fixed top-6 left-6 md:top-10 md:left-10 z-[1000] rounded-xl p-3 transition-all duration-300 shadow-lg border border-white/10
          ${showMenu ? "bg-purple-600 text-white rotate-90" : "bg-purple-900/80 text-gray-200 hover:bg-purple-800"}
          focus:outline-none focus:ring-2 focus:ring-purple-500`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiAdjustmentsHorizontal size={28} />
      </button>

      {/* Social links (Top Right) */}
      <div
        className={`fixed top-6 right-6 md:top-10 md:right-10 z-[999] flex gap-3 transition-all duration-500 ease-in-out
          ${showMenu ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"}`}
      >
        {[
          { icon: FaSquareGithub, href: "https://github.com/AkemMensah", label: "GitHub" },
          { icon: FaLinkedin, href: "https://www.linkedin.com/in/akemmensah/", label: "LinkedIn" }
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="rounded-xl bg-purple-900/80 p-3 text-white backdrop-blur-md border border-white/10 hover:bg-purple-700 hover:scale-110 transition-all shadow-lg"
          >
            <social.icon size={24} />
          </a>
        ))}
      </div>

      {/* Navigation icons (Bottom Center) */}
      <nav
        className={`fixed z-[999] flex items-center gap-2 md:gap-4 bg-purple-900/80 px-4 py-2 md:px-6 md:py-3 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl text-gray-200 transition-all duration-500 ease-in-out
          ${showMenu ? "bottom-10 opacity-100" : "-bottom-24 opacity-0 pointer-events-none"}`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={() => handleNavClick(index)}
            className={`group relative text-xl p-3 rounded-full transition-all duration-300
              ${active === index
                ? "bg-purple-500 text-white shadow-inner"
                : "hover:bg-white/10 text-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-purple-400`}
            aria-current={active === index ? "page" : undefined}
          >
            {createElement(item.icon)}

            {/* Tooltip for desktop */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.name}
            </span>
          </a>
        ))}
      </nav>

      {/* Simple Overlay to close menu when clicking outside */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[998]"
          onClick={() => setShowMenu(false)}
        />
      )}
    </div>
  );
};

export default Navbar;