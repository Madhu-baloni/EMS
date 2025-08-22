const express = require("express");
const authMiddleware = require("../Middleware/authMidleware");
const {
  addEmployee,
  upload,
  getEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

router.get("/", authMiddleware, getEmployee);
router.post("/addEmp", authMiddleware, upload.single("image"), addEmployee);
// router.get("/:id", authMiddleware, getDepartment);
// router.put("/:id", authMiddleware, updateDepartment);
// router.delete("/:id", authMiddleware, deleteDepartment);

module.exports = router;
