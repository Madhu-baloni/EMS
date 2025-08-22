const Department = require("../models/departmentModel");

const adddepartment = async (req, res) => {
  try {
    const { dept_name, description } = req.body;

    if (!dept_name || !description) {
      return res.status(400).json({
        success: false,
        msg: "Department name and description are required",
      });
    }

    const new_dept = new Department({
      dept_name,
      description,
    });

    await new_dept.save();

    return res.status(200).json({ success: true, department: new_dept });
  } catch (error) {
    console.error("Error in adddepartment:", error);

    return res.status(500).json({
      success: false,
      error: "Add department server error",
    });
  }
};

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    return res.status(200).json({ success: true, departments });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "add department server error" });
  }
};

const getDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findById({ _id: id });
    return res.status(200).json({ success: true, department });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "Get department server error" });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { dept_name, description } = req.body;
    const updateDep = await Department.findByIdAndUpdate(
      { _id: id },
      {
        dept_name,
        description,
      }
    );
    return res.status(200).json({ success: true, updateDep });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "edit department server error" });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedep = await Department.findByIdAndDelete(id);

    if (!deletedep) {
      return res
        .status(404)
        .json({ success: false, error: "Department not found" });
    }

    return res.status(200).json({ success: true, deletedep });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "Error deleting department" });
  }
};

module.exports = {
  adddepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
  deleteDepartment,
};
