const bodyParser = require("body-parser");
const express = require("express");
//Routes imports
const authRoutes = require("./Routes/Auth");
const JobRoutes = require("./Routes/Jobs");
const ExperienceRoutes = require("./Routes/Experience");
//MiddleWare imports
// const authenticate = require("./controllers/jobValidator");

const dbConnection = require("./connection");
const app = express();
//MiddleWares implementation
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
dbConnection();

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   if (password == 12345) {
//     return res.status(200).send("Logged in successfully");
//   }
// });

app.use("/auth", authRoutes);
app.use("/jobs", JobRoutes);
app.use("/experience", ExperienceRoutes);
// app.use(authenticate);

app.listen(9000, () => {
  console.log("Server started on PORT 9000");
});
