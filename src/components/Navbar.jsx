import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header flex items-center justify-between p-5">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white flex item-center justify-center font-bold shadow-md"
      >
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
          AH
        </p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
