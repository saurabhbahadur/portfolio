import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary_bg text-primary_text px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center ">
        <div className="text-2xl font-bold hidden md:inline ">Saurabh</div>
        <div className="space-x-6 ">
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
            About me
          </a>
          <a href="#contact" className="hover:text-hover_color">
            Contact
          </a>
        </div>
        {/* <button className="bg-primary_button_grad text-primary_text hidden md:inline transition transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full ">
          Connect me
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
