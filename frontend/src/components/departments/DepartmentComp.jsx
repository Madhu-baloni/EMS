import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
import { columns, DepartmentsButton } from "../../utils/DepartmentHelper";
import customStyles from "./TablecustomStyle";

const DepartmentComp = () => {
  const [departments, setDepartments] = useState([]);
  const [filterDepartments, setFilterDepartments] = useState([]);
  const navigate = useNavigate();

  const ondeleteDepartment = async (id) => {
    const data = departments.filter((dept) => dept._id !== id);
    setDepartments(data);
    setFilterDepartments(data);
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/department",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          const data = response.data.departments.map((dept, index) => ({
            _id: dept._id,
            sno: index + 1,
            dept_name: dept.dept_name,
            description: dept.description || "No description available",
            action: (
              <DepartmentsButton
                _id={dept._id}
                ondeleteDepartment={ondeleteDepartment}
              />
            ),
          }));
          setDepartments(data);
          setFilterDepartments(data);
        }
      } catch (error) {
        if (error.response && error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
    fetchDepartments();
  }, []);

  const filterDepartment = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (!searchTerm) {
      setFilterDepartments(departments);
    } else {
      const filteredData = departments.filter((dep) =>
        dep.dept_name.toLowerCase().includes(searchTerm)
      );
      setFilterDepartments(filteredData);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        sx={{
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Manage Department
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
        }}
      >
        <TextField
          type="search"
          placeholder="Search By Department"
          onChange={filterDepartment}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#fff" },
              "&:hover fieldset": { borderColor: "white" },
              "&.Mui-focused fieldset": { borderColor: "white" },
            },
            background: "white",
          }}
        />
        <Button
          onClick={() =>
            navigate("/admin-dashboard/departments/adddepartments")
          }
          sx={{
            color: "white",
            m: 1,
            p: 1.8,
            background: "rgb(25, 105, 143)",
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
            "&:hover": {
              background: "rgb(96, 124, 137)",
            },
          }}
        >
          Add
        </Button>
      </Box>
      <Box
        sx={{
          m: 2,
          backgroundColor: "white",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          padding: 2,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 6px 16px rgba(0,0,0,0.2)",
            transform: "scale(1.01)",
          },
        }}
      >
        <DataTable
          columns={columns}
          data={filterDepartments}
          pagination
          highlightOnHover
          striped
          responsive
          customStyles={customStyles}
        />
      </Box>
    </Box>
  );
};

export default DepartmentComp;
