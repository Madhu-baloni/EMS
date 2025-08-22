import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { columns } from "../../../src/utils/EmployeeHelper";
import customStyles from "../departments/TablecustomStyle.js";

const empList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/employees",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          const data = response.data.employees.map((emp, index) => ({
            sno: index + 1,
            image: (
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            ),
            name: emp.name,
            dob: emp.dob.split("T")[0],
            department: emp.department,
            action: (
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  sx={{
                    background:
                      "linear-gradient(135deg,rgb(50, 88, 104),rgb(136, 176, 193))",
                    mt: "2rem",
                    fontWeight: "bold",
                    paddingY: 1.5,
                    "&:hover": {
                      background: "rgb(19, 52, 67)",
                    },
                  }}
                  variant="contained"
                  size="small"
                  onClick={() =>
                    navigate(`/admin-dashboard/employees/view/${emp._id}`)
                  }
                >
                  View
                </Button>
                <Button
                  sx={{
                    background:
                      "linear-gradient(135deg,rgb(50, 88, 104),rgb(136, 176, 193))",
                    mt: "2rem",
                    fontWeight: "bold",
                    paddingY: 1.5,
                    "&:hover": {
                      background: "rgb(96, 124, 137)",
                    },
                  }}
                  variant="contained"
                  size="small"
                  onClick={() =>
                    navigate(`/admin-dashboard/employees/edit/${emp._id}`)
                  }
                >
                  Edit
                </Button>
              </Box>
            ),
          }));
          setEmployees(data);
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

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
        Employee List
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
          onClick={() => navigate("/admin-dashboard/employees/addEmp")}
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
          m: 1,
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
          data={employees}
          customStyles={customStyles}
          pagination
          highlightOnHover
          striped
          responsive
        />
      </Box>
    </Box>
  );
};

export default empList;
