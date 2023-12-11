const express = require("express");
const router = express.Router();
const Recruiter = require("../models/Recruiter");
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const key = "Aura";

// Create Account for Normal user
// EndPoint http://localhost:9000/api/auth/user/signup
router.post("/user/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !email || !password || !lastName) {
    return res.status(400).json({ err: "field cannot be empty" });
  }
  try {
    const alreadyExist = await User.findOne({ email: email });
    if (alreadyExist) {
      return res
        .status(400)
        .json({ err: "A user with this email already exist" });
    }
  } catch (error) {
    return res.end(error);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userDetails = { firstName, lastName, email, password: hashedPassword };
  const newUser = await User.create(userDetails);
  newUser.password;
  res.status(201).json({
    user: {
      firstName,
      lastName,
      email,
    },
  });
});

// Create Account for Recruiter
// EndPoint http://localhost:9000/api/auth/recruiter/signup
router.post("/recruiter/signup", async (req, res) => {
  const { firstName, lastName, email, password ,companyName} = req.body;
  if (!firstName || !email || !password || !lastName || !companyName) {
    return res.status(400).json({ err: "field cannot be empty" });
  }
  try {
    const alreadyExist = await Recruiter.findOne({ email: email });
    if (alreadyExist) {
      return res
        .status(400)
        .json({ err: "A recruiter with this email already exist" });
    }
  } catch (error) {
    return res.end(error);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userDetails = { firstName,lastName, email, password: hashedPassword,companyName };
  const newUser = await Recruiter.create(userDetails);
  // newUser.password;
  res.status(201).json({
    user: {
      firstName,
      lastName,
      email,
      companyName
    },
  });
});

// Login for both 
// EndPoint http://localhost:9000/api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ err: "Invalid request body" });
  }
  const userExist = await User.findOne({ email: email });
  if (!userExist) {
    const recruiterExist = await Recruiter.findOne({ email: email });
    console.log(recruiterExist);
    if(!recruiterExist){
      res.status(400).json({ err: "Invalid email or password" });
    }
    const validated = await bcrypt.compare(password, recruiterExist.password);
    if (!validated) {
      res.status(400).json({ err: "Invalid email or password" });
    } else {
      var token = jwt.sign({ email:recruiterExist.email }, key);
      res.status(200).json({ msg: "Logged In successfully",name:recruiterExist.firstName,token });
    }
  } else {
    const validated = await bcrypt.compare(password, userExist.password);
    if (!validated) {
      res.status(400).json({ err: "Invalid email or password" });
    } else {
      var token = jwt.sign({ email:userExist.email }, key);
      res.status(200).json({ msg: "Logged In successfully",name:userExist.firstName,token });

    }
  }
  
});

module.exports = router;