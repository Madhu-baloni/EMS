import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import AdminPage from "../components/dashboard/AdminPage";
import AdminDashboard from "../pages/AdminDashboard";
import EmployeeDashboard from "../pages/EmployeeDashboard";
import DepartmentComp from "../components/departments/DepartmentComp";
import RolebasedRoutes from "../utils/RolebasedRoutes";
import PrivateRoutes from "../utils/PrivateRoutes";
import AddDepartment from "../components/departments/AddDepartment";
import EditDepartment from "../components/departments/EditDepartment";
import EmpList from "../components/employee/EmpList";
import AddEmp from "../components/employee/AddEmp";
import ViewDetails from "../components/employee/ViewDetails";
import EditEmp from "../components/employee/EditEmp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin-dashboard",
    element: (
      <PrivateRoutes>
        <RolebasedRoutes requiredRole={["admin"]}>
          <AdminDashboard />
        </RolebasedRoutes>
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
      {
        path: "departments",
        element: <DepartmentComp />,
      },
      {
        path: "departments/adddepartments",
        element: <AddDepartment />,
      },
      {
        path: "departments/:id",
        element: <EditDepartment />,
      },
      {
        path: "/admin-dashboard/employees",
        element: <EmpList />,
      },
      {
        path: "/admin-dashboard/employees/addEmp",
        element: <AddEmp />,
      },
      {
        path: "/admin-dashboard/employees/view/:id",
        element: <ViewDetails />,
      },
      {
        path: "/admin-dashboard/employees/edit/:id",
        element: <EditEmp />,
      },
    ],
  },
  {
    path: "/employee-dashboard",
    element: <EmployeeDashboard />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
