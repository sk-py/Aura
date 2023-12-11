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
  link: {
    type: String,
  },
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
});
const Jobs = mongoose.model("jobs", JobSchema);
module.exports = Jobs;
