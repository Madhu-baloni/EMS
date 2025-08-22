const express = require("express");
const { login, verify } = require("../controllers/authController");
const authMiddleware = require("../Middleware/authMidleware");

const router = express.Router();

router.post("/login", login);
router.get("/verify", authMiddleware, verify);

module.exports = router;
