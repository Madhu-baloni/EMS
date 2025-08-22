const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  empId: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
  },
  department: {
    type: String,
  },
  role: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
