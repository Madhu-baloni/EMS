require("dotenv").config();
const User = require("./models/user");
const bcrypt = require("bcrypt");
const connectToDb = require("./db/db");
const userRegister = async () => {
  await connectToDb();

  try {
    const hashPass = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPass,
      role: "admin",
    });
    await newUser.save();
    console.log("Admin user created.");
  } catch (err) {
    console.log(`❌ Something went wrong ${err}`);
  }
};

userRegister();
