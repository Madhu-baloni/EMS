const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const Employee = require("../models/employeeModel");
const User = require("../models/user");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const addEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      dob,
      department,
      empId,
      gender,
      salary,
      password,
      role,
    } = req.body;
    console.log(req.body);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: "User already registered",
      });
    }

    const hashpass = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashpass,
      role,
      profileImg: req.file ? req.file.filename : "",
    });

    await newUser.save();

    const newEmployee = new Employee({
      empId,
      dob,
      gender,
      department,
      salary,
    });

    await newEmployee.save();

    return res.status(201).json({ success: true, msg: "Employee created" });
  } catch (error) {
    console.error("Error adding employee:", error);
    return res
      .status(500)
      .json({ success: false, error: "Server error in adding employee" });
  }
};

const getEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    return res.status(200).json({ success: true, employees });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "Get employee server error" });
  }
};

module.exports = { addEmployee, upload, getEmployee };
