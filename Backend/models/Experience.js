const mongoose = require("mongoose");
const ExperienceSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: false,
  },
  endDate: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

const Experience = mongoose.model("Experience", ExperienceSchema);
module.exports = Experience;
