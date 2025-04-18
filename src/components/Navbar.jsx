import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom"; // Only useful if you're navigating routes, not anchor links

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#aboutme" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => setIsOpen(false);

  return (
    <nav className="bg-primary_bg text-primary_text px-6 md:px-16 lg:px-24 fixed top-0 w-full z-50 shadow-md">
      <div className="container py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Saurabh</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-hover_color transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary_bg py-4 absolute top-full text-center left-0 w-full shadow-lg">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={handleMenuClick}
              className="block py-2 px-6 hover:text-hover_color transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
      <hr />
    </nav>
  );
};

export default Navbar;
