const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  experiences: [
    {
      type: String,
    },
  ],
  skills: [
    {
      type: String,
    },
  ],
});

const User = mongoose.model("user", userSchema);
module.exports = User;
