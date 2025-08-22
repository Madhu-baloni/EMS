import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
  const [department, setDepartment] = useState({
    dept_name: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/department/add",
        department,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        navigate("/admin-dashboard/departments");
      } else {
        console.log("Error response:", response.data.msg);
        alert(response.data.msg);
      }
    } catch (error) {
      if (error.response && error.response.data.success) {
        alert(error.response.data.error);
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ p: 2 }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 500,
          height: 400,
          backgroundColor: "rgba(217, 210, 210, 0.1)",
          backdropFilter: "blur(10px)",
          color: "white",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "1.8rem",
          }}
        >
          Add Department
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3} sx={{ p: 3 }}>
            <TextField
              name="dept_name"
              label="Department Name"
              variant="outlined"
              fullWidth
              placeholder="Enter department name"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{ style: { color: "#fff" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#fff" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
              onChange={handleChange}
            />

            <TextField
              name="description"
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              placeholder="Enter description"
              fullWidth
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{ style: { color: "#fff" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#fff" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #0F2027, #2C5364)",
                mt: "2rem",
                fontWeight: "bold",
                fontSize: "1rem",
                paddingY: 1.5,
                "&:hover": {
                  background: "rgb(96, 124, 137)",
                },
              }}
            >
              Add Department
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default AddDepartment;

AddDepartment.jsx;
