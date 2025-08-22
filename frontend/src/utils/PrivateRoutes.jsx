import React from "react";
import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Typography>loading....</Typography>;
  }
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
