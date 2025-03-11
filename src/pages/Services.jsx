import React from "react";
import { services } from "../util/Data";

const Services = () => {
  return (
    <div className="bg-primary_bg text-primary_text py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24  ">
        <h2 className="text-4xl font-bold text-center mb-12  ">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-secondary_bg px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-secondary_button_grad">
                {" "}
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-secondary_button_grad">
                {service.title}
              </h3>
              <p className="mt-2 text-secondary_text ">{service.description}</p>
              {/* <a href="#" className="mt-4 inline-block text-secondary_text ">
                Read more
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
