import React from "react";
import { handleContactByMail, handleDownloadResume } from "../util/Data";
import { Typewriter } from "react-simple-typewriter";

const home_profile_img = "https://res.cloudinary.com/dxaf36ydh/image/upload/f_auto,q_auto/v1/Portfolio/home_profile_afeao8";

const Home = () => {
  return (
    <div
      className="bg-primary_bg text-primary_text text-center mt-4 py-16 h-auto flex flex-col items-center justify-center"
      id="home"
    >
      <img
        src={home_profile_img}
        alt="Profile"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />

      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-secondary_button_grad">
          Saurabh Bahadur,
        </span>
      </h1>

      {/* Wrapping Typewriter in a div with min-height */}
      <div className="text-4xl font-bold h-[50px] md:h-[60px]">
        <span className="text-secondary_text">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Backend Developer",
              "MERN Stack Developer",
              "Java Developer",
              "Spring Boot Developer",
              "SEO Specialist",
              "Tech Enthusiast",
              "Gamer & Content Creator",
              "Vlogger",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>

      <p className="mt-4 p-4 text-lg text-secondary_text max-w-2xl">
        I am a passionate Full Stack Developer with expertise in both Java
        Spring Boot and MERN stack technologies.
      </p>

      <div className="mt-4 space-x-4">
        <button
          onClick={handleContactByMail}
          className="bg-primary_button_grad text-primary_text px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105"
        >
          Contact Me
        </button>
        <button
          onClick={handleDownloadResume}
          className="bg-secondary_button_grad text-primary_text px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
