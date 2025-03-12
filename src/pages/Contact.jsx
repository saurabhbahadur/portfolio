import React from "react";
import { FaEnvelope, FaLocationPin, FaPhone } from "react-icons/fa6";
import { my_urls } from "../util/Data";
import ContactForm from "../components/ContactForm";

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
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
