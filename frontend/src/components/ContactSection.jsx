import React, { useState, useContext } from "react";
import contactImg from "../assets/contact-img.svg";
import { motion } from "framer-motion";
import SocialContext from "../context/SocialContext";

const ContactSection = () => {
  const { userEmail } = useContext(SocialContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Clear error only for the specific field
    if (error && name === "fullName" && value.trim()) setError(null);
    if (error && name === "email" && value.trim()) setError(null);
    if (error && name === "message" && value.trim()) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, message } = formValues;

    if (!fullName.trim()) return setError("A Name is required");
    if (!email.trim()) return setError("Email is required");
    if (!message.trim()) return setError("A Message is required");

    setLoading(true);
    try {
      await userEmail({ fullName, email, phone, message });
      setFormValues({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      }); // Clear the form
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* Contact Form Section */
    <motion.section
      className="py-16"
      style={{
        background:
          "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
      }}
      initial={{ opacity: 0, y: 50 }} // Start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true }} // Ensures it only animates once
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
        <div className="grid items-center">
          <img alt="Contact image" src={contactImg} className="" />
        </div>
        <div>
          <div className="container mx-auto text-center text-white mb-1">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="">Have any questions? We're here to help.</p>
          </div>
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="fullName"
                  type="text"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-[#AA367C] focus:ring focus:ring-[#AA367C]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-[#AA367C] focus:ring focus:ring-[#AA367C]"
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  placeholder="Optional"
                  autoComplete="tel"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-[#AA367C] focus:ring focus:ring-[#AA367C]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-[#AA367C] focus:ring focus:ring-[#AA367C]"
                  placeholder="Your message"
                ></textarea>
              </div>
              {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#AA367C] text-white py-2 px-6 rounded-full text-lg hover:bg-[#4A2FBD] ${
                  loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
