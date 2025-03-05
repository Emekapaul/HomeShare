import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import logo from "../assets/brand-logo.svg";
import profileImage from "../assets/profile-placeholder.jpg"; // Replace with dynamic profile pic if available

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-md bg-white text-gray-900">
      {/* Container to center content */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-3" />
          <span className="text-xl font-extrabold tracking-wide text-gray-900">
            HomeShare
          </span>
        </div>

        {/* Profile Section */}
        <div className="relative">
          {/* Display Email on Larger Screens */}
          <div className="hidden md:flex items-center space-x-3">
            <p className="text-gray-700 font-medium">{user.email}</p>
          </div>

          {/* Profile Picture */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-md transition-all hover:scale-105"
            />

            {/* Hover Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 text-sm">
                <p className="text-center text-gray-700 px-4 py-2">
                  {user.email}
                </p>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition"
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
