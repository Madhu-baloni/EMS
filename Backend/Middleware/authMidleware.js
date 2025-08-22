const jwt = require("jsonwebtoken");
const User = require("../models/user");

const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(404)
        .json({ sucess: false, message: "No token Provided" });
    }
    const decoded = await jwt.verify(token, process.env.JWT_KEY);

    if (!decoded) {
      return res.status(404).json({ sucess: false, message: "not valid" });
    }
    const user = await User.findById({ _id: decoded._id }).select("-password");

    if (!user) {
      return res.status(404).json({ sucess: false, message: "user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ sucess: false, message: "Server side error" });
  }
};

module.exports = verifyUser;
