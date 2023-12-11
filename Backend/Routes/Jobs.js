const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const Jobs = require("../models/Jobs");

router.get("/recommended/:userId", async (req, res) => {
  const id = req.params.userId;
  const user = await Users.findOne({ _id: id });
  if (!user) {
    res.status(404).json("User not found");
  }
  const userSkills = user.skills;
  if (userSkills.length === 0) {
    res.status(204).json({ err: "Add skills to get job recommendations" });
  }
  const matchedJobs = await Jobs.find({
    requiredSkills: { $in: userSkills },
  });
  res.status(200).json(matchedJobs);
});
// authentication middleware pending

router.post("/create", async (req, res) => {
  const {
    companyName,
    role,
    description,
    requiredSkills,
    salary,
    link,
    postedBy,
    type,
  } = req.body;

  //   const skillsArray = requiredSkills.split(",").map((skill) => skill.trim());
  //   const SalaryArray = salary.split(",").map((val) => val.trim());
  try {
    const newJob = await Jobs.create({
      companyName,
      role,
      description,
      requiredSkills,
      salary,
      link,
      postedBy,
      type,
    });
    if (newJob) {
      res.status(201).json("Job posted successfully!");
    } else {
      res.status(500).json("An unknown error occurred please try again");
    }
  } catch (error) {
    res.status(500).json("An error occurred, please try again");
  }
});

module.exports = router;
