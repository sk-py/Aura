const mongoose = require("mongoose");
const AppliedJobSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  jobId: {
    ///Will be coming from jobs collection
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});
const AppliedJobs = mongoose.model("JobApplications", AppliedJobSchema);
module.exports = AppliedJobs;
