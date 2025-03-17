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

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          if (error.response.data.error === "Unauthorized: Token has expired") {
            toast.error("Session expired. Please log in again.");
            logout();
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
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
      navigate("/dashboard");
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
