import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import handleCrudError from "../utils/handleCrudError";

// Create Auth Context
const AuthContext = createContext();

// API Base URL
const API_URL = import.meta.env.VITE_AUTH_URL;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [regEmail, setRegEmail] = useState(null); // ✅ Store email after registration
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Set Axios Authorization Header if token exists
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    console.log("Stored Token on Mount:", storedToken);
    console.log("Stored User on Mount:", storedUser);
    if (storedToken && storedUser) {
      axios.defaults.headers.common["Authorization"] = storedToken;
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      setToken(null);
      setUser(null); // ✅ Ensure user is cleared if token is removed
      setIsAuthenticated(false);
    }
    setLoading(false);
  }, []);

  // Register User
  const register = async (email) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/register`, { email });
      setRegEmail(response.data.email);
      //return response.data;
    } catch (err) {
      const errorMessage = handleCrudError(err);
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Verify Code & Issue Token
  const verifyCode = async (code) => {
    console.log("email", regEmail);
    console.log("CHECKING");
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/verify`, {
        email: regEmail,
        code,
      });
      const { token, userData, message } = response.data;
      setToken(token);
      setUser(userData);
      setIsAuthenticated(true);

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common["Authorization"] = token;
      toast.success(message);
      navigate("/");
    } catch (err) {
      const errorMessage = handleCrudError(err);
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Logout User
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    navigate("/emailverify");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        regEmail,
        isAuthenticated,
        register,
        verifyCode,
        logout,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
