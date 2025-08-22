import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const CardComp = ({ icon, text, number, color }) => {
  return (
    <Box
      sx={{
        display: "flex",
        background: "white",
        height: "6.5rem",
        width: "20rem",
        borderRadius: "2rem",
      }}
    >
      <Box sx={{ fontSize: "5rem", p: 1, color: { color } }}>{icon}</Box>
      <Box sx={{ m: "2rem", textAlign: "center" }}>
        <Typography>{text}</Typography>
        <Typography>{number}</Typography>
      </Box>
    </Box>
  );
};

export default CardComp;
