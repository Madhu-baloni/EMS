import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Paper,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";
import ButtonComp from "../components/ButtonComp";
import { useAuth } from "../context/authContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        login(response.data.user);
        localStorage.setItem("token", response.data.token);

        if (response.data.user.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/employee_dashboard");
        }
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        setError(error.response.data.error);
      } else {
        setError("Server Error");
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Fade in timeout={1000}>
          <Paper
            elevation={8}
            sx={{
              px: isMobile ? 3 : 5,
              py: isMobile ? 4 : 6,
              mt: isMobile ? "15rem" : "20rem",
              borderRadius: 4,
              width: "100%",
              maxWidth: isMobile ? 300 : 400,
              backgroundColor: "rgba(241, 236, 236, 0.1)",
              backdropFilter: "blur(10px)",
              color: "#fff",
            }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              align="center"
              gutterBottom
              sx={{
                mb: 3,
                fontFamily: "cursive",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Login
            </Typography>

            {error && <Typography sx={{ color: "red" }}>{error}</Typography>}

            <Box noValidate autoComplete="off">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#fff" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                }}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{ style: { color: "#fff" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#fff" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>

            <Box sx={{ mt: 3 }}>
              <ButtonComp value="Login" />
            </Box>
          </Paper>
        </Fade>
      </form>
    </Box>
  );
};

export default LoginPage;
