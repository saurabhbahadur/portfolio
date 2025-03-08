import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary_bg text-primary_text px-6 md:px-16 lg:px-24 fixed top-0 w-full z-50 shadow-md">
      <div className="container py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Saurabh</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-hover_color">
            Home
          </a>
          <a href="#services" className="hover:text-hover_color">
            Services
          </a>
          <a href="#projects" className="hover:text-hover_color">
            Projects
          </a>
          <a href="#aboutme" className="hover:text-hover_color">
            About
          </a>
          <a href="#contact" className="hover:text-hover_color">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary_bg py-4 absolute top-full text-center left-0 w-full shadow-lg">
          <a
            href="#home"
            className="block py-2 px-6 hover:text-hover_color"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="block py-2 px-6 hover:text-hover_color"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#projects"
            className="block py-2 px-6 hover:text-hover_color"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#aboutme"
            className="block py-2 px-6 hover:text-hover_color"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block py-2 px-6 hover:text-hover_color"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
