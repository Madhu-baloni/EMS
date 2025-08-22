import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import SidebarComp from "../components/dashboard/SidebarComp";
import NavbarComp from "../components/dashboard/NavbarComp";
// import AdminPage from "../components/AdminPage";

const AdminDashboard = () => {
  const { user, loading } = useAuth();

  const navigate = useNavigate();

  if (loading) {
    return <Typography>loading...</Typography>;
  }
  if (!user) {
    navigate("/login");
  }

  return (
    <>
      <Grid container>
        <Grid size={{ xs: 6, md: 3 }}>
          <SidebarComp />
        </Grid>
        <Grid size={{ xs: 6, md: 9 }}>
          <NavbarComp />
          {/* <AdminPage /> */}
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default AdminDashboard;
