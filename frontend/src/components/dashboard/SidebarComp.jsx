import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SettingsIcon from "@mui/icons-material/Settings";

function SidebarComp() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right top,rgb(40, 96, 120),rgb(128, 185, 209))",
        height: "100vh",
        color: "white",
        position: "fixed",
        padding: isMobile ? "1rem" : "2rem",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: "1.4rem",
            background: "linear-gradient(90deg,rgb(25, 63, 79),rgb(4, 42, 58))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textTransform: "uppercase",
            letterSpacing: 1,
            animation: "fadeIn 1.5s ease-in-out",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(-20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          Employee MS
        </Typography>
        <Divider />
      </Box>
      <Stack direction="column" spacing="3rem" sx={{ m: "2rem" }}>
        <NavLink
          to="/admin-dashboard"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#2C5364" : "",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            padding: "1.3rem",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "1.2rem",
            width: "8rem",
          })}
          end
        >
          <DashboardIcon />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/departments"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#2C5364" : "",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            padding: "1.3rem",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "1.2rem",
            width: "8rem",
          })}
        >
          <ApartmentIcon />
          <span>Departments</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/employees"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#2C5364" : "",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            padding: "1.3rem",
            textDecoration: "none",
            borderRadius: "8px",

            fontSize: "1.2rem",
            width: "8rem",
          })}
        >
          <BadgeIcon />
          <span>Employee</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard"
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            padding: "1.3rem",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "1.2rem",
            width: "8rem",
          })}
        >
          <CalendarMonthIcon />
          <span>Leaves</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard"
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            padding: "1.3rem",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "1.2rem",
            width: "8rem",
          })}
        >
          <AttachMoneyIcon />
          <span>Salary</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard"
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            padding: "1.3rem",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "1.2rem",
            width: "8rem",
          })}
        >
          <SettingsIcon />
          <span>Setting</span>
        </NavLink>
      </Stack>
    </Box>
  );
}

export default SidebarComp;
