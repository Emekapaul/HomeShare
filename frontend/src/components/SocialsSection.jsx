import React, { useState, useContext, useEffect } from "react";
import { FaTwitter, FaTelegramPlane, FaYoutube, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import SocialContext from "../context/SocialContext";
import Modal from "react-modal";

// Set the app element for accessibility
Modal.setAppElement("#root");

const SocialsSection = ({ socialsRef }) => {
  const { socialData, updateSocials, loading, error } =
    useContext(SocialContext);
  const [isSubmitting, setIsSubmitting] = useState({});
  const [goStatus, setGoStatus] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoClick = (platform) => {
    setGoStatus((prev) => ({ ...prev, [platform]: true }));
  };

  const handleSocialClick = (platform) => {
    if (!goStatus[platform] && platform === "twitter")
      return toast.error("Please follow our twitter before verifying");
    if (!goStatus[platform] && platform === "telegram")
      return toast.error("Please join our Telegram group before verifying");
    if (!goStatus[platform] && platform === "youtube")
      return toast.error("Please subscribe to our youtube before verifying");

    setIsSubmitting((prev) => ({ ...prev, [platform]: true }));

    setTimeout(async () => {
      try {
        const updatedStatus = { ...socialData, [platform]: true };
        await updateSocials(updatedStatus);
      } catch (error) {
        console.error("Error updating social status:", error);
      } finally {
        setIsSubmitting((prev) => ({ ...prev, [platform]: false })); // Ensures the button reactivates even if an error occurs
      }
    }, 5000); // 5-second delay
  };

  // Open modal when allVerified is true
  useEffect(() => {
    if (socialData.allVerified) {
      setIsModalOpen(true);
    }
  }, [socialData.allVerified]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section
      ref={socialsRef}
      className="relative py-16 bg-gradient-to-b from-[#1E1A2F] to-[#2C2543] text-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }} // Start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true }} // Ensures it only animates once
    >
      <div className="relative container mx-auto px-6 text-center z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Connect with Us 🔥
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Stay updated and be part of our growing community. Follow us on
          Twitter, join our Telegram group, and subscribe to our YouTube
          channel!
        </p>

        {/* Social Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6">
          {/* Twitter */}
          <div
            className={`flex items-center justify-between gap-3 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg
              ${
                socialData.twitter
                  ? "bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
          >
            <div className="flex items-center gap-3">
              <FaTwitter size={24} />
              {socialData.twitter ? "Followed" : "Follow on Twitter"}
            </div>
            <div>
              {socialData.twitter ? (
                <FaCheck className="text-white" />
              ) : (
                <div className="flex items-center gap-3">
                  <a
                    href="https://x.com/shareshome?s=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleGoClick("twitter")}
                    className=" hover:text-gray-700 hover:underline cursor-pointer"
                  >
                    Go
                  </a>
                  <button
                    className={`hover:text-gray-700  ${
                      isSubmitting.twitter || loading
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:underline"
                    }`}
                    onClick={() => handleSocialClick("twitter")}
                    disabled={isSubmitting.twitter || loading}
                  >
                    {isSubmitting.twitter ? "Verifying..." : "Verify"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Telegram */}
          <div
            className={`flex items-center justify-between gap-3 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg
              ${
                socialData.telegram
                  ? "bg-green-600"
                  : "bg-teal-500 hover:bg-teal-600"
              }`}
          >
            <div className="flex items-center gap-3">
              <FaTelegramPlane size={24} />
              {socialData.telegram ? "Joined" : "Join Telegram"}
            </div>
            <div>
              {socialData.telegram ? (
                <FaCheck className="text-white" />
              ) : (
                <div className="flex items-center gap-3">
                  <a
                    href="https://t.me/+Fk_KrnfCnio0NzFk"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleGoClick("telegram")}
                    className=" hover:text-gray-700 hover:underline cursor-pointer"
                  >
                    Go
                  </a>
                  <button
                    className={`hover:text-gray-700  ${
                      isSubmitting.telegram || loading
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:underline"
                    }`}
                    onClick={() => handleSocialClick("telegram")}
                    disabled={isSubmitting.telegram || loading}
                  >
                    {isSubmitting.telegram ? "Verifying..." : "Verify"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* YouTube */}
          <div
            className={`flex items-center justify-between gap-3 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg
            ${
              socialData.youtube
                ? "bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            <div className="flex items-center gap-3">
              <FaYoutube size={24} />
              {socialData.youtube ? "Subscribed" : "Subscribe on YouTube"}
            </div>
            <div>
              {socialData.youtube ? (
                <FaCheck className="text-white" />
              ) : (
                <div className="flex items-center gap-3">
                  <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleGoClick("youtube")}
                    className=" hover:text-gray-700 hover:underline cursor-pointer"
                  >
                    Go
                  </a>
                  <button
                    className={`hover:text-gray-700  ${
                      isSubmitting.youtube || loading
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:underline"
                    }`}
                    onClick={() => handleSocialClick("youtube")}
                    disabled={isSubmitting.youtube || loading}
                  >
                    {isSubmitting.youtube ? "Verifying..." : "Verify"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Verify Button */}
      {socialData.allVerified && (
        <p className="mt-6 text-lg text-center font-semibold text-green-400">
          ✅ You have verified all socials!
        </p>
      )}
      {socialData.allVerified && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true} // Closes modal when clicking outside
          contentLabel="All Verified Modal"
          className="fixed inset-0 flex items-center justify-center z-50"
          overlayClassName="fixed inset-0 bg-gray-800/50 z-50"
        >
          <div
            className="absolute inset-0"
            onClick={closeModal} // Manually close modal when clicking outside
          ></div>
          <div className="bg-white p-6 rounded-2xl shadow-2xl text-center relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-3xl text-gray-500 hover:text-gray-900 transition cursor-pointer"
            >
              &times;
            </button>
            <p className="text-lg font-semibold text-gray-700 mb-4">
              ✅ Early comer batch!
            </p>
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/12/10/door-159330_1280.png"
              alt="Verified"
              className="w-64 h-64 mx-auto mb-4"
            />
          </div>
        </Modal>
      )}
    </motion.section>
  );
};

export default SocialsSection;
