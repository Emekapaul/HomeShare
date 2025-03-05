import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import logo from "../assets/brand-logo.svg";
import profileImage from "../assets/brand-logo.svg";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let timer;

  const handleMouseEnter = () => {
    clearTimeout(timer);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setIsMenuOpen(false);
    }, 200); // Adjust the delay as needed
  };

  return (
    <header className="shadow-md text-white ">
      {/* Container to center content */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-3" />
          <span className="text-xl font-extrabold tracking-wide">
            HomeShare
          </span>
        </div>

        <div className="relative flex items-center">
          <div className="hidden md:block">
            <p className=" text-white px-6 py-2 text-l font-medium rounded-full shadow-md">
              {user.email}
            </p>
          </div>

          {/* Profile Picture */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/01/19/real-estate-155524_1280.png"
              alt="Profile"
              className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 shadow-md transition-all hover:scale-105"
            />

            {/* Hover Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 md:w-32 bg-gray-200 shadow-lg rounded-lg py-2 text-sm">
                <p className="md:hidden text-center text-gray-800 font-bold px-4 py-2">
                  {user.email}
                </p>
                <button
                  onClick={logout}
                  className="w-full text-center font-extrabold px-4 py-2 text-red-700 hover:text-red-500 transition"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
