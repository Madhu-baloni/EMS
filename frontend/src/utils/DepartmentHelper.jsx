import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Box, useTheme } from "@mui/material";

const getButtonStyles = (theme, colorType) => {
  const colorObj = theme.palette[colorType] || {
    main: "#1976d2",
    contrastText: "#fff",
    dark: "#115293",
  };
  return {
    textTransform: "none",
    fontWeight: 500,
    px: 2,
    py: 0.5,
    background: "linear-gradient(135deg,rgb(50, 88, 104),rgb(136, 176, 193))", // your gradient
    color: colorObj.contrastText,
    "&:hover": {
      backgroundColor: colorObj.dark,
    },
  };
};

export const columns = [
  {
    name: "S no.",
    selector: (row) => row.sno,
  },
  {
    name: "Department Name",
    selector: (row) => row.dept_name,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row) => row.description,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const DepartmentsButton = ({ _id, ondeleteDepartment }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirm = window.confirm("Do you want to delete this record?");
    if (confirm) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/api/department/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          ondeleteDepartment(id);
        } else {
          alert("Failed to delete the department.");
        }
      } catch (error) {
        console.error("Error deleting department:", error);
        if (error.response && error.response.data.success === false) {
          alert(error.response.data.error);
        } else {
          alert("An error occurred while deleting the department.");
        }
      }
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Button
        variant="contained"
        size="small"
        sx={getButtonStyles(theme, "primary")}
        onClick={() => navigate(`/admin-dashboard/departments/${_id}`)}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={getButtonStyles(theme, "error")}
        onClick={() => handleDelete(_id)}
      >
        Delete
      </Button>
    </Box>
  );
};
