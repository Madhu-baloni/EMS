import React from "react";
import { useAuth } from "../../context/authContext";
import { Box, Button, Typography } from "@mui/material";

function NavbarComp() {
  const { user } = useAuth();
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right top,rgb(40, 96, 120),rgb(128, 185, 209))",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        p: 1,
      }}
    >
      <Typography sx={{ fontSize: "1.5rem" }}>Welcome {user.name}</Typography>
      <Button
        sx={{
          p: 1,
          background: "#2C5364",
          color: "white",
          fontSize: "1rem",
          fontWeight: "bold",
          "&:hover": {
            background: "rgb(96, 124, 137)",
          },
        }}
      >
        Logout
      </Button>
    </Box>
  );
}

export default NavbarComp;
