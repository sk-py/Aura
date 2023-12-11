const bodyParser = require("body-parser");
const express = require("express");
const dbConnection = require("./connection");
require("dotenv").config();
const PORT = process.env.PORT;
//Routes imports
const authRoutes = require("./Routes/Auth");
const JobRoutes = require("./Routes/Jobs");
const ExperienceRoutes = require("./Routes/Experience");
const ApplicationRoutes = require("./Routes/JobApplications");

//MiddleWare imports
const authenticate = require("./controllers/jobValidator");

const app = express();
//MiddleWares implementation
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

dbConnection();

app.use("/api/auth", authRoutes);
app.use("/jobs", JobRoutes);
app.use("/experience", ExperienceRoutes);
app.use("/application", ApplicationRoutes);
app.get("/", (req, res) => {
  return res.end("HII FROM SERVER");
});
// app.use("/jobs", JobRoutes);
// app.use("/experience", ExperienceRoutes);
// app.use(authenticate);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
