const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ err: "Invalid request body" });
  }
  const alreadyExist = await User.findOne({ email: email });
  if (alreadyExist) {
    return res
      .status(400)
      .json({ err: "A user with this email already exist" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userDetails = { fullName, email, password: hashedPassword };
  const newUser = await User.create(userDetails);
  newUser.password;
  res.status(201).json({
    user: {
      fullName,
      email,
    },
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ err: "Invalid request body" });
  }
  const userExist = await User.findOne({ email: email });
  if (!userExist) {
    res.status(400).json({ err: "Email not registered" });
  } else {
    const validated = await bcrypt.compare(password, userExist.password);
    if (!validated) {
      res.status(400).json({ err: "Invalid email or password" });
    } else {
      res.status(200).json({ err: "Logged In successfully" });
    }
  }
});

module.exports = router;
