import React, { useState } from "react";
import { certificates } from "../util/Data";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex(
      currentIndex === 0 ? certificates.length - 1 : currentIndex - 1
    );
  };

  const nextCard = () => {
    setCurrentIndex(
      currentIndex === certificates.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="bg-primary_bg text-primary_text py-20 text-center">
      <h2 className="text-4xl font-bold mb-12">Certificates</h2>
      <div className="relative flex justify-center items-center w-full max-w-4xl mx-auto">
        <button
          className="absolute left-2 md:left-4 bg-secondary_bg p-2 rounded-full opacity-80 hover:opacity-100 z-10"
          onClick={prevCard}
        >
          <FaAngleLeft/>
        </button>

        <div className="flex items-center justify-center space-x-4">
          {/* Left Card */}
          <div className="hidden md:block bg-secondary_bg p-4 rounded-lg w-64 transform scale-90 opacity-75">
            <img
              src={
                certificates[
                  (currentIndex - 1 + certificates.length) % certificates.length
                ].image
              }
              alt=""
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
          </div>

          {/* Center Card - Highlighted */}
          <div className="bg-secondary_bg p-6 rounded-lg w-80 transform scale-105 shadow-lg">
            <img
              src={certificates[currentIndex].image}
              alt=""
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-bold mb-2">
              {certificates[currentIndex].title}
            </h3>
            <p className="text-primary_text mb-1 font-bold">
              {certificates[currentIndex].issuedby}
            </p>
            <p className="text-primary_text mb-1">{certificates[currentIndex].tech}</p>
            <p className="text-primary_text font-bold mb-1">
              {certificates[currentIndex].year}
            </p>
          </div>

          {/* Right Card */}
          <div className="hidden md:block bg-secondary_bg p-4 rounded-lg w-64 transform scale-90 opacity-75">
            <img
              src={certificates[(currentIndex + 1) % certificates.length].image}
              alt=""
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
          </div>
        </div>

        <button
          className="absolute right-2 md:right-4 bg-secondary_bg p-2 rounded-full opacity-80 hover:opacity-100 z-10"
          onClick={nextCard}
        >
          <FaAngleRight/>
        </button>
      </div>
    </div>
  );
};

export default Certificates;
