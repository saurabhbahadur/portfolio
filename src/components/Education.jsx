import React from "react";
import { educations } from "../util/Data";

const Education = () => {
  return (
    <div className="bg-primary_bg text-primary_text py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="space-y-6">
          {educations.map((education) => (
            <div
              key={education.id}
              className="flex justify-between items-center bg-secondary_bg p-4 rounded-lg"
            >
              {/* Left Side (Education Name + Organization) */}
              <div>
                <h1 className="text-transparent text-2xl font-bold bg-clip-text bg-secondary_button_grad">
                  {education.edu_name}
                </h1>
                <p className="text-secondary_text text-lg">{education.edu_org}</p>
              </div>

              {/* Right Side (Year) */}
              <div className="text-xl font-bold text-secondary_text">
                {education.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
