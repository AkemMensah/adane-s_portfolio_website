"use client";
import { createElement, useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { navItems } from "../data";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-purple-900/70 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiAdjustmentsHorizontal size={35} />
      </div>
      <div className={`fixed top-10 right-60 z-[999] flex gap-4 ${
          showMenu ? "top-10 max-640:right-20" : "top-[-100%]"
        }`}>

        <a href="https://github.com/AkemMensah" target="blank">
        <div
          className="sm:cursor-pointer  rounded-lg bg-purple-900/70 p-2"
        >
          <FaSquareGithub size={35}/>
        </div>
        </a>
        <a href="https://www.linkedin.com/in/akemmensah/" target="blank">
        <div
          className="sm:cursor-pointer  rounded-lg bg-purple-900/70 p-2"
        >
          <FaLinkedin size={35}/>
        </div>
        </a>
      </div>
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-purple-800/60 px-6 py-3 backdrop-blur-md rounded-full text-gray-200 duration-300 ${
          showMenu ? "bottom-10 max-540:bottom-20" : "bottom-[-100%]"
        }`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={() => setActive(index)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
              active === index && "bg-purple-500"
            }`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
