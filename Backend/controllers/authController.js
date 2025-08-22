const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ success: false, error: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(404).json({ success: false, error: "password not match" });
    }
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "20d" }
    );
    res
      .status(200)
      .json({ success: true, token, msg: "you are logged in", user });
  } catch (err) {
    res.status(500).json({ success: false, err: err.message });
  }
};

const verify = (req, res) => {
  return res.status(200).json({ status: true, user: req.user });
};

module.exports = {
  login,
  verify,
};
