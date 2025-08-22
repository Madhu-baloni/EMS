import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";

const AddEmp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    department: "",
    image: null,
    empId: "",
    gender: "",
    salary: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/employees/addEmp",
        formDataObj,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        alert("Employee added successfully");
        navigate("/admin-dashboard/employees");
      } else {
        alert(response.data.error || response.data.msg);
      }
    } catch (error) {
      console.error("Error:", error.response.data);
      alert("Failed to add employee.");
    }
  };

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Box
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 500,
          height: 700,
          backgroundColor: "white",
          backdropFilter: "blur(10px)",
          color: "white",
          mt: "5%",
          ml: "20%",
          borderRadius: "1rem",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "1.5rem",
            fontWeight: "bold",
            mb: "1rem",
          }}
        >
          Add Employee
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5} sx={{ p: 1.3 }}>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <TextField
                label="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <TextField
                label="Date of Birth"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                type="date"
                fullWidth
                required
                variant="outlined"
                sx={{ mb: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <TextField
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <TextField
                label="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <TextField
                label="EmpId"
                name="empId"
                value={formData.empId}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <TextField
                label="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <TextField
                label="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <TextField
                label="image"
                name="image"
                type="file"
                fullWidth
                onChange={handleChange}
                variant="outlined"
                sx={{ mb: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <TextField
                label="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6, sm: 6 }}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  p: 1.5,
                  background: "#2C5364",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "rgb(96, 124, 137)",
                  },
                }}
              >
                Add Employee
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default AddEmp;
