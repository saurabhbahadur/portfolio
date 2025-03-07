import React from "react";
import { projects } from "../util/Data";

const Project = () => {
  return (
    <div className="bg-primary_bg text-primary_text py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24  ">
        <h2 className="text-4xl font-bold text-center mb-12  ">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-secondary_bg p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 "
            >
              <img
                src={project.image}
                alt=""
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-secondary_text mb-4">{project.tech}</p>
              <a
                href={project.github}
                className="inline-block bg-secondary_button_grad text-primary_text px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferer"
              >
                {" "}
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
