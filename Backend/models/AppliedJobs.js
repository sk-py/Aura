const mongoose = require("mongoose");
const AppliedJobs = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});
