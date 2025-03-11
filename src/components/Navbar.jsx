import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary_bg text-primary_text px-6 md:px-16 lg:px-24 fixed top-0 w-full z-50 shadow-md">
      <div className="container py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Saurabh</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-hover_color">
            Home
          </Link>
          <Link to="/services" className="hover:text-hover_color">
            Services
          </Link>
          <Link to="/projects" className="hover:text-hover_color">
            Projects
          </Link>
          <Link to="/about-me" className="hover:text-hover_color">
            About
          </Link>
          <Link to="/contact" className="hover:text-hover_color">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary_bg py-4 absolute top-full text-center left-0 w-full shadow-lg">
          <Link
            to="/"
            className="block py-2 px-6 hover:text-hover_color"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block py-2 px-6 hover:text-hover_color"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="block py-2 px-6 hover:text-hover_color"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/about-me"
            className="block py-2 px-6 hover:text-hover_color"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-6 hover:text-hover_color"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
