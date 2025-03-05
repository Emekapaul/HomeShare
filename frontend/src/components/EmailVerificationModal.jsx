import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthContext from "../context/AuthContext"; // Import AuthContext
import logo from "../assets/brand-logo.svg";

const EmailVerificationModal = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [step, setStep] = useState(1); // 1: Email Entry, 2: Verification Code
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feError, setfeError] = useState(null);
  const { register, verifyCode, loading, regEmail, error } =
    useContext(AuthContext); // Get auth functions

  // Handle Email Submission
  const handleEmailSubmit = async () => {
    if (!email.trim()) return setfeError("Email is required");

    setIsSubmitting(true);
    try {
      await register(email); // Call register function from AuthContext
      setStep(2); // Move to next step
    } catch (err) {
      setfeError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Code Verification
  const handleCodeSubmit = async () => {
    if (!verificationCode.trim())
      return setfeError("Verification Code is required");

    setIsSubmitting(true);
    try {
      await verifyCode(verificationCode); // Call verifyCode function from AuthContext
    } catch (err) {
      console.error("Code verification error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Cancel
  const handleCancel = () => {
    setStep(1);
    setEmail(regEmail);
    setVerificationCode("");
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { value } = e.target;
    if (step === 1) {
      setEmail(value);
    } else {
      setVerificationCode(value);
    }
    if (feError) setfeError(null);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-cover bg-center z-50"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2018/07/15/13/04/living-room-3539587_1280.jpg')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 backdrop-blur-md"></div>
        {/* Modal Content */}
        <motion.div
          className="bg-[#1E1A2F] text-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 h-full flex flex-col justify-center border-1 border-yellow-500 relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Cancel Button */}
          {step === 2 && (
            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
            >
              &times;
            </button>
          )}

          <img src={logo} alt="Logo" className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-2xl font-bold italic text-center mb-4">
            {step === 1 ? "Join HomeShare" : regEmail}
          </h1>
          <h2 className="text-2xl md:text-xl font-bold text-center mb-4">
            {step === 1
              ? "Enter Your Email"
              : "Enter the Verification Code Sent to your Email"}
          </h2>
          <p className="text-gray-300 text-center mb-6">
            {step === 1
              ? "We will send a verification code to your email."
              : "Check your email and enter the code below."}
          </p>

          {/* Input Field */}
          <input
            id={step === 1 ? "email" : "code"}
            name={step === 1 ? "email" : "code"}
            type={step === 1 ? "email" : "text"}
            placeholder={step === 1 ? "Enter your email" : "Enter code"}
            value={step === 1 ? email : verificationCode}
            autoComplete={step === 1 ? "email" : "off"}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg text-white outline-none focus:ring-2 focus:ring-yellow-500 border-1 border-gray-500"
          />

          {/* Error Message */}
          {(error || feError) && (
            <p className="text-red-500 text-center mt-2">{feError || error}</p>
          )}

          {/* Submit Button */}
          <button
            onClick={step === 1 ? handleEmailSubmit : handleCodeSubmit}
            className={`w-full mt-4 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 py-3 rounded-lg text-lg font-semibold ${
              isSubmitting || loading
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            disabled={isSubmitting || loading}
          >
            {isSubmitting || loading
              ? "Processing..."
              : step === 1
              ? "Send Code"
              : "Verify & Login"}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EmailVerificationModal;
