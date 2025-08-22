import React from "react";
import { Button } from "@mui/material";

const ButtonComp = ({ value }) => {
  return (
    <>
      <Button
        fullWidth
        type="submit"
        sx={{
          mt: 3,
          background: "linear-gradient(135deg, #0F2027, #2C5364)",
          color: "#fff",
          padding: "12px 28px",
          borderRadius: "50px",
          fontSize: "1.3rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          transition: "all 0.4s ease",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            background: "linear-gradient(135deg,rgb(126, 175, 197), #2C5364)",
            transform: "scale(1.02)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        {value}
      </Button>
    </>
  );
};

export default ButtonComp;
