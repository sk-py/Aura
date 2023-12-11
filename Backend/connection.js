const mongoose = require("mongoose");
require("dotenv").config();
const url = `mongodb+srv://peers_admin:${process.env.MONGO_PASSWORD}@cluster0.kkvhsnv.mongodb.net/jboard?retryWrites=true&w=majority`;
const dbConnection = async () => {
  try {
    await mongoose
      .connect(url)
      .then(console.log("Database connection established successfully..."));
  } catch (error) {
    console.log(`Error : ${error.message}`);
  }
};

module.exports = dbConnection;
