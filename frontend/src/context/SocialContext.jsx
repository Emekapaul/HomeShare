import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "./AuthContext";
import handleCrudError from "../utils/handleCrudError";

// Create SocialContext
export const SocialContext = createContext();
const API_URL = import.meta.env.VITE_SOCIAL_URL;

// Create SocialProvider component to wrap around the components and provide social-related data
export const SocialProvider = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const [socialData, setSocialData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load socials from localStorage when the component mounts
  useEffect(() => {
    if (isAuthenticated) {
      const storedSocials = localStorage.getItem("socials");
      if (storedSocials) {
        setSocialData(JSON.parse(storedSocials));
      } else {
        fetchSocials();
      }
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem("socials");
      setSocialData({});
    }
  }, [isAuthenticated]);

  // CRUD operations
  // Function to update a social platform status
  const updateSocials = async (newSocials) => {
    setLoading(true);
    try {
      const response = await axios.put(`${API_URL}/update`, newSocials);
      const updatedSocials = response.data.socials;
      setSocialData((prevSocials) => ({ ...prevSocials, ...updatedSocials }));
      localStorage.setItem("socials", JSON.stringify(updatedSocials));
      toast.success("Social status updated successfully");
    } catch (err) {
      const errorMessage = handleCrudError(err);
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const fetchSocials = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/status`);
      const { socials } = response.data;
      localStorage.setItem("socials", JSON.stringify(socials));
      setSocialData(socials);
    } catch (err) {
      const errorMessage = handleCrudError(err);
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // localStorage.clear();

  const userEmail = async (emailData) => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/email`, emailData);
      toast.success("Email sent successfully");
    } catch (err) {
      const errorMessage = handleCrudError(err);
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SocialContext.Provider
      value={{ socialData, updateSocials, loading, error, userEmail }}
    >
      {children}
    </SocialContext.Provider>
  );
};

export default SocialContext;
