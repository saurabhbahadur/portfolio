import React from "react";
import { my_urls } from "../util/Data";

const About = () => {
  return (
    <div className="bg-primary_bg text-primary_text py-20" id="aboutme">
      <div className="container mx-auto px-8 md:px-16 lg:px-24  ">
        <h2 className="text-4xl font-bold text-center mb-12  ">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 ">
          <img
            src={my_urls[0].about_page_img}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1 ">
            <p className="text-lg mb-8 text-justify">
              Motivated MCA graduate with hands-on experience in developing
              impactful projects. Successfully created a variety of web
              applications demonstrating proficiency in building scalable
              solutions. Developed a web application following MVC architecture
              with Node JS, Express JS, and MongoDB, incorporating Cloudinary
              for image management and Mapbox for interactive mapping. Hosted
              applications on GitHub for version control and deployed using
              platforms like Render for seamless hosting. Possessing a strong
              foundation in various programming languages, frameworks, and
              technologies, along with problem-solving skills, I am eager to
              contribute my expertise to innovative projects in a professional
              environment
            </p>
            <div className="space-y-4 ">
              {/* skills */}
              <div className="flex items-center  transform transition-transform duration-300 hover:scale-105 ">
                <label htmlFor="htmlandcss" className="w-2/12  ">
                  HTML & CSS{" "}
                </label>
                <div className="grow bg-secondary_bg rounded-full h-2.5 ">
                  <div
                    className="bg-secondary_button_grad
                    h-2.5 
                    rounded-full
                    w-9/12"
                  ></div>
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex items-center  transform transition-transform duration-300 hover:scale-105 ">
                <label htmlFor="htmlandcss" className="w-2/12  ">
                  Java{" "}
                </label>
                <div className="grow bg-secondary_bg rounded-full h-2.5 ">
                  <div
                    className="bg-secondary_button_grad
                    h-2.5 
                    rounded-full
                    w-11/12"
                  ></div>
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex items-center  transform transition-transform duration-300 hover:scale-105 ">
                <label htmlFor="htmlandcss" className="w-2/12  ">
                  React JS
                </label>
                <div className="grow bg-secondary_bg rounded-full h-2.5  ">
                  <div
                    className="bg-secondary_button_grad
                    h-2.5 
                    rounded-full
                    w-10/12"
                  ></div>
                </div>
              </div>
              {/* --------------------------------- */}
            </div>

            {/* ======================== */}
          </div>
        </div>
        {/* exp */}
        {/* <div className="mt-12 flex justify-between text-center ">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-secondary_button_grad">
              3+
            </h3>
            <p>Years experience </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-secondary_button_grad">
              50+
            </h3>
            <p>Projects completed </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-secondary_button_grad">
              10+
            </h3>
            <p>Happy Clients</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
