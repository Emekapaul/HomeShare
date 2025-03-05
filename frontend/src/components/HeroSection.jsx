import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const HeroSection = ({ scrollToSocials }) => {
  return (
    /* Hero Section */
    <section
      className="relative bg-cover bg-center h-screen flex items-center pt-20 md:pt-0"
      style={{
        backgroundImage:
          'linear-gradient(rgba(30, 26, 47, 0.85), rgba(30, 26, 47, 0.85)), url("https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg")',
      }}
      aria-label="Hero Section"
    >
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>
      <motion.div
        className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white"
        initial={{ opacity: 0, y: 50 }} // Start hidden and below
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }} // Ensures it only animates once
      >
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Own a Piece of Luxury Real Estate
          </h1>
          <p className="text-lg mb-8 max-w-xl mx-auto md:mx-0">
            Experience the future of real estate ownership with fractionalized
            properties that let you invest in premium buildings. Join us today
            and unlock the door to your investment potential.
          </p>
          <button
            onClick={scrollToSocials}
            className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg hover:bg-yellow-600 transition-all duration-300"
          >
            Get Started
          </button>
        </div>
        {/*<div className="relative h-[20rem] lg:h-auto w-full md:w-1/2 flex justify-center items-center rounded-3xl overflow-hidden shadow-lg mt-8 md:mt-0">
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <Spline scene="https://prod.spline.design/hnl6x1LG52GigRBq/scene.splinecode" />
          </Suspense>
        </div>*/}
      </motion.div>
    </section>
  );
};

export default HeroSection;
