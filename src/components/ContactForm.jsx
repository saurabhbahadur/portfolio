import React, { useState } from "react";
import { db } from "../firebaseconfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    error: "",
    success: "",
    loading: false,
  });

  // Environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ error: "", success: "", loading: true });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        error: "All fields are required",
        success: "",
        loading: false,
      });
      return;
    }

    try {
      // Save to Firestore
      await addDoc(collection(db, "enquiry"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // Send email via EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name:"Saurabh",  
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus({
        success: "Message sent successfully!",
        error: "",
        loading: false,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus({
        error: "Failed to send message. Please try again.",
        success: "",
        loading: false,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      {status.error && <p className="text-red-500">{status.error}</p>}
      {status.success && <p className="text-green-500">{status.success}</p>}

      <div>
        <label htmlFor="name" className="block mb-2">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-icon"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-icon"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Enter Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-icon"
        />
      </div>

      <button
        type="submit"
        className={`bg-secondary_button_grad text-primary_text px-8 py-2 rounded-full transition-transform duration-300 ${
          status.loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
        }`}
        disabled={status.loading}
      >
        {status.loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
