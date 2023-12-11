const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  links: [
    {
      type: String,
    },
  ],
});

const Projects = mongoose.model("Projects", ProjectSchema);
module.exports = Projects;
