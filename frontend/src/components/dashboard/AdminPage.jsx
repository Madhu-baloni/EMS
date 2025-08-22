import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import {
  FaBuilding,
  FaCheckCircle,
  FaFileAlt,
  FaHourglassHalf,
  FaMoneyBillWave,
  FaTimesCircle,
  FaUsers,
} from "react-icons/fa";
import CardComp from "../dashboard/CardComp";

const AdminPage = () => {
  return (
    <Box sx={{ mt: 6, px: 1 }}>
      <Typography
        sx={{ fontSize: "1.5rem", color: "white", m: 2, fontWeight: "bold" }}
      >
        Dashboard Overview
      </Typography>
      <Grid container spacing={6} sx={{ m: 3 }}>
        <Grid item xs={12} sm={4} md={4}>
          <CardComp
            icon={<FaUsers />}
            text="Total Employees"
            number={40}
            color="#1A2A80"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CardComp
            icon={<FaBuilding />}
            text="Total Departments"
            number={5}
            color="#9ECAD6"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CardComp
            icon={<FaMoneyBillWave />}
            text="Monthly Pay"
            number="$300"
            color="#748DAE"
          />
        </Grid>
      </Grid>

      <Typography
        sx={{
          fontSize: "1.5rem",
          color: "white",
          mt: 8,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Leave Details
      </Typography>
      <Grid container spacing={6} sx={{ m: 3 }}>
        <Grid item xs={12} sm={4} md={4}>
          <CardComp
            icon={<FaFileAlt />}
            text="Leave Applied"
            number={4}
            color="#4A9782"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CardComp
            icon={<FaCheckCircle />}
            text="Leave Approved"
            number={1}
            color="#0F828C"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CardComp
            icon={<FaHourglassHalf />}
            text="Leave Pending"
            number={2}
            color="#FFD66B"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <CardComp
            icon={<FaTimesCircle />}
            text="Leave Rejected"
            number={1}
            color="#BB3E00"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminPage;
