const mongoose = require("mongoose");
const SkillSchema = mongoose.Schema({
  skillsName: {
    type: String,
    required: flase,
  },
});

const Skills = mongoose.model("Skills", SkillSchema);
module.exports = Skills;
