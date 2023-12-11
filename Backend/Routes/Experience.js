const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience");
const Users = require("../models/Users");

router.post("/add", async (req, res) => {
  const { companyName, position, startDate, endDate, description, userId } =
    req.body;
  if (!companyName || !position || !startDate || !userId) {
    res.status(400).json({ err: "Invalid request body" });
  }

  const ExperienceObj = {
    companyName,
    position,
    startDate,
    endDate,
    description,
    userId,
  };

  const NewExperience = await Experience.create(ExperienceObj);

  const User = await Users.findOne({ userId: Users._id });

  User.experiences.push(NewExperience._id);
  await User.save();
  res.status(201).json({ success: "Experience added succesfully" });
});

module.exports = router;
