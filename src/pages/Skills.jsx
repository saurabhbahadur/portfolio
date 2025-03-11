import React from "react";
import { skills } from "../util/Data";

const Skills = () => {
  return (
    <div className="bg-primary_bg text-primary_text py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24  ">
        <h2 className="text-4xl font-bold text-center mb-12  ">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {skills.map((skill) => (
            <div key={skill.id}>
              <p className="bg-secondary_button_grad font-bold text-lg px-4 py-2 rounded-full text-center transform transition-transform duration-300 hover:scale-105">
                {" "}
                {skill.name}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
