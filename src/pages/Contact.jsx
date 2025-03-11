import React from "react";
import { FaEnvelope, FaLocationPin, FaPhone } from "react-icons/fa6";
import { my_urls } from "../util/Data";

const Contact = () => {
  return (
    <div className="bg-primary_bg text-primary_text py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24  ">
        <h2 className="text-4xl font-bold text-center mb-12  ">Contact</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 ">
          <div className="flex-1 ">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-secondary_button_grad mb-4  ">
              Let's Talk{" "}
            </h3>
            <p>
              Feel free to reach out to me for collaborations, job
              opportunities, or any tech-related discussions. I'm always open to
              connecting with like-minded professionals!
            </p>
            <div className="mb-4 mt-8 ">
              <FaEnvelope className="inline-block text-icon mr-2" />
              <a
                href= {my_urls[0].mail_id}
                className="hover:underline "
              >
                singhsaurabhbahadur@gmail.com
              </a>
            </div>
            <div className="mb-4 ">
              <FaPhone className="inline-block text-icon mr-2" />
              <span>+91 48644 45687</span>
            </div>
            <div className="mb-4 ">
              <FaLocationPin className="inline-block text-icon mr-2" />
              <span>India</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form action="" className="space-y-4  ">
              <div>
                <label htmlFor="name" className="block mb-2 ">
                  Your Name{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name=""
                  id=""
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-icon "
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 ">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name=""
                  id=""
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-icon "
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 ">
                  Message
                </label>
                <textarea
                  type="text"
                  placeholder="Enter Your Message"
                  name=""
                  id=""
                  rows="5"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-icon "
                />
              </div>
              <button className="bg-secondary_button_grad text-primary_text hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full ">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
