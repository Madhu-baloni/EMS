import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const EditDepartment = () => {
  const [department, setDepartment] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          `  http://localhost:3000/api/department/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setDepartment(response.data.department);
        }
      } catch (error) {
        if (error.response && error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/department/${id}`,
        department,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/departments");
      } else {
        alert("Failed to update department.");
      }
    } catch (error) {
      console.error("Error updating department:", error);
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
          Edit Department
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3} sx={{ p: 3 }}>
            <TextField
              name="dept_name"
              value={department.dept_name || ""}
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
              value={department.description}
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
              Edit Department
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default EditDepartment;
