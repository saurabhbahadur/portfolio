import React from "react";
import { my_urls } from "../util/Data";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div
      className="bg-primary_bg text-primary_text text-center py-16 h-screen"
      id="home"
    >
      <img
        src={my_urls[0].home_page_profile_img}
        alt="Profile"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold mb-8">
        I'm{" "}
        <span className="text-transparent  bg-clip-text bg-secondary_button_grad">
          Saurabh Bahadur,
        </span>
      </h1>

      <h1 className="text-4xl font-bold mb-8">
        <span className="text-secondary_text">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Backend Developer",
              "MERN Stack Developer",
              "Java Developer",
              "Spring Boot Developer",
              "SEO Specialist",
              "Digital Marketer",
              "Tech Enthusiast",
              "Gamer & Content Creator",
              "Vlogger"
            ]}
            
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p className="mt-4 p-4 text-lg text-secondary_text">
        I am a passionate Full Stack Developer with expertise in both Java
        Spring Boot and MERN stack technologies
      </p>
      <div className="mt-4 space-x-4">
        <button className="bg-primary_button_grad text-primary_text  md:inline transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact Me
        </button>
        <button className="bg-secondary_button_grad text-primary_text  md:inline transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
