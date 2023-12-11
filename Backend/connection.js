const mongoose = require("mongoose");

const url =
  "mongodb+srv://peers_admin:admin123@cluster0.kkvhsnv.mongodb.net/jboard?retryWrites=true&w=majority";
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
