import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>; // You can replace this with a spinner or skeleton screen
  return isAuthenticated ? children : <Navigate to="/emailverify" />;
};

export default PrivateRoute;
