import React from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { my_urls } from "../util/Data";

const Footer = () => {
  return (
    <footer className="bg-primary_bg text-primary_text py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Saurabh</h3>
            <p className="text-secondary_text">
              Technology is about innovation and collaboration. Let’s connect
              and create something amazing together!
            </p>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400"> &copy; {new Date().getFullYear()}</p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href={my_urls[0].linked_id}
              className="text-secondary_text hover:text-primary_text"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href={my_urls[0].discord_id}
              className="text-secondary_text hover:text-primary_text"
            >
              <FaDiscord className="text-2xl" />
            </a>
            <a
              href={my_urls[0].mail_id}
              className="text-secondary_text hover:text-primary_text"
            >
              <FaEnvelope className="text-2xl" />
            </a>
            <a
              href={my_urls[0].github_id}
              className="text-secondary_text hover:text-primary_text"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href={my_urls[0].insta_id}
              className="text-secondary_text hover:text-primary_text"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
          <div className="flex space-x-2">
            <a href="" className="text-secondary_text hover:text-primary_text">
              Privacy
            </a>
            <a href="" className="text-secondary_text hover:text-primary_text">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
