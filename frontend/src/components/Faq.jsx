import { useState } from "react";
import PropTypes from "prop-types";
import arrowDown from "../assets/arrowDown.svg";

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-white md:w-[48%] sm:w-full flex flex-col border-b-[#1E1A2F66] border-b">
      <button
        className="flex justify-between w-full align-center py-6"
        onClick={toggleOpen}
      >
        <span className="text-[#1E1A2FCC] font-bold text-left lg:text-[1rem] md:text-[.9rem]">
          {question}
        </span>
        <img
          src={arrowDown}
          alt="arrowDown"
          className={`my-auto transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <p className="text-[.8rem] py-2 pb-4 text-[#1E1A2FCC]">{answer}</p>
      </div>
    </div>
  );
}

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
