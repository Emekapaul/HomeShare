import React, { useState, useContext, useEffect } from "react";
import { FaTwitter, FaTelegramPlane, FaYoutube, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import SocialContext from "../context/SocialContext";
import Modal from "react-modal";

// Set the app element for accessibility
Modal.setAppElement("#root");

// Define common platform data
const socialPlatforms = {
  twitter: {
    name: "Twitter",
    link: "https://x.com/shareshome?s=11",
    color: "bg-blue-500 hover:bg-blue-600",
    icon: <FaTwitter size={24} />,
    message: "Please follow our Twitter before verifying",
    verifiedText: "Followed",
    notVerifiedText: "Follow on Twitter",
  },
  telegram: {
    name: "Telegram",
    link: "https://t.me/+Fk_KrnfCnio0NzFk",
    color: "bg-teal-500 hover:bg-teal-600",
    icon: <FaTelegramPlane size={24} />,
    message: "Please join our Telegram group before verifying",
    verifiedText: "Joined",
    notVerifiedText: "Join Telegram",
  },
  youtube: {
    name: "YouTube",
    link: "https://youtube.com/",
    color: "bg-red-500 hover:bg-red-600",
    icon: <FaYoutube size={24} />,
    message: "Please subscribe to our YouTube before verifying",
    verifiedText: "Subscribed",
    notVerifiedText: "Subscribe on YouTube",
  },
};

const SocialsSection = ({ socialsRef }) => {
  const { socialData, updateSocials, loading } = useContext(SocialContext);
  const [isSubmitting, setIsSubmitting] = useState({});
  const [goStatus, setGoStatus] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoClick = (platform) => {
    setGoStatus((prev) => ({ ...prev, [platform]: true }));
  };

  const handleSocialClick = (platform) => {
    if (!goStatus[platform])
      return toast.error(socialPlatforms[platform].message);

    setIsSubmitting((prev) => ({ ...prev, [platform]: true }));

    setTimeout(async () => {
      try {
        const updatedStatus = { ...socialData, [platform]: true };
        await updateSocials(updatedStatus);
      } catch (error) {
        console.error(`Error verifying ${platform}:`, error);
      } finally {
        setIsSubmitting((prev) => ({ ...prev, [platform]: false }));
      }
    }, 5000); // 5-second delay
  };

  const isButtonDisabled = (platform) => isSubmitting[platform] || loading;

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
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
          {Object.keys(socialPlatforms).map((platform) => {
            const platformData = socialPlatforms[platform];
            const isVerified = socialData[platform];
            const bgColor = isVerified ? "bg-green-600" : platformData.color;

            return (
              <div
                key={platform}
                className={`flex items-center justify-between gap-3 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg ${bgColor}`}
              >
                <div className="flex items-center gap-3">
                  {platformData.icon}
                  {isVerified
                    ? platformData.verifiedText
                    : platformData.notVerifiedText}
                </div>
                <div>
                  {isVerified ? (
                    <FaCheck className="text-white" />
                  ) : (
                    <div className="flex items-center gap-3">
                      <a
                        href={platformData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleGoClick(platform)}
                        className="hover:text-gray-700 hover:underline cursor-pointer"
                      >
                        Go
                      </a>
                      <button
                        className={`hover:text-gray-700 ${
                          isButtonDisabled(platform)
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer hover:underline"
                        }`}
                        onClick={() => handleSocialClick(platform)}
                        disabled={isButtonDisabled(platform)}
                      >
                        {isSubmitting[platform] ? "Verifying..." : "Verify"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {socialData.allVerified && (
        <p className="mt-6 text-lg text-center font-semibold text-green-400">
          ✅ You have verified all socials!
        </p>
      )}

      {socialData.allVerified && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          contentLabel="All Verified Modal"
          className="fixed inset-0 flex items-center justify-center z-50"
          overlayClassName="fixed inset-0 bg-gray-800/50 z-50"
        >
          <div className="absolute inset-0" onClick={closeModal}></div>
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
