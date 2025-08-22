import React from "react";
import { useAuth } from "../context/AuthContext";
import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

const RolebasedRoutes = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) {
    <Typography>loading...</Typography>;
  }

  if (!requiredRole.includes(user.role)) {
    <Navigate to="unauthorized" />;
  }

  return user ? children : <Navigate to="/login" />;
};

export default RolebasedRoutes;
