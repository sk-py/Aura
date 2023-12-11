const express = require("express");
const router = express.Router();
const AppliedJobs = require("../models/AppliedJobs");

//Route for applying on a specefic job post --- for candidate
router.post("/apply", async (req, res) => {
  const { userId, jobId } = req.body;
  try {
    const newApplication = await AppliedJobs.create({
      userId,
      jobId,
    });
    res.status(200).json("Application created succesfully");
  } catch (error) {
    res.status(500).json(`Error: ${error.message}`);
  }
});
//Route for updating status of candidate's application --- for recruiter
router.post("/status", async (req, res) => {
  const { status, jobId, userId } = req.body;
  try {
    const job = await AppliedJobs.findOneAndUpdate(
      {
        jobId: jobId,
        userId: userId,
      },
      { $set: { status: status } }
    );
    // job.status = status;
    // await AppliedJobs.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json(`Error: ${error.message}`);
  }
});

//Route for displaying all the applications for a specific job --- for Recruiter and Candidate
router.get("/view/:jobId", async (req, res) => {
  const jobId = req.params.jobId;
  try {
    const allApplications = await AppliedJobs.find({ jobId: jobId });
    res.json(allApplications);
  } catch (err) {
    res.status(500).json(`Error: ${err.message}`);
  }
});

//Route for deleting application --- for candidate
router.delete("/delete", (req, res) => {
  const { userId, jobId } = req.body;
});

module.exports = router;
