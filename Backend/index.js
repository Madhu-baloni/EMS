const express = require("express");
const cors = require("cors");
const authRouter = require("./AuthRoutes/auth");
const departmentRouter = require("./AuthRoutes/department");
const employeeRouter = require("./AuthRoutes/Employee");
const connectToDb = require("./db/db");

connectToDb();
const app = express();
app.use(express.static("public/uploads"));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/department", departmentRouter);
app.use("/api/employees", employeeRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started at http://localhost:${process.env.PORT}`);
});
