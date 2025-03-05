import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import PropertyListing from "../components/PropertyListing";
import SocialsSection from "../components/SocialsSection";
import ContactSection from "../components/ContactSection";
import FaqSection from "../components/FaqSection";

const DashBoard = () => {
  const socialsRef = useRef(null); // Create a ref

  const scrollToSocials = () => {
    socialsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeroSection scrollToSocials={scrollToSocials} />
      <PropertyListing />
      <SocialsSection socialsRef={socialsRef} />
      <ContactSection />
      <FaqSection />
    </div>
  );
};

export default DashBoard;
