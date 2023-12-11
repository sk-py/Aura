const mongoose = require("mongoose");
const JobSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requiredSkills: [
    {
      type: String,
    },
  ],
  salary: [
    {
      type: String,
    },
  ],
  jobType: {
    type: {
      type: String,
    },
    jobLocation: {
      type: String,
    },
    level: {
      type: String,
    },
  },
  postedBy: {
    type: String,
  },
  link: {
    type: String,
  },
  status: {
    type: String, ////Routes Implementation pending , Updation of jobs Status by recruiter Active/InActive
  },
});
const Jobs = mongoose.model("jobs", JobSchema);
module.exports = Jobs;
