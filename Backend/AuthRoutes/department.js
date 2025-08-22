const express = require("express");
const authMiddleware = require("../Middleware/authMidleware");
const {
  adddepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");

const router = express.Router();

router.get("/", authMiddleware, getDepartments);
router.post("/add", authMiddleware, adddepartment);
router.get("/:id", authMiddleware, getDepartment);
router.put("/:id", authMiddleware, updateDepartment);
router.delete("/:id", authMiddleware, deleteDepartment);

module.exports = router;
