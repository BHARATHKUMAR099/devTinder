const mongoose = require("mongoose");


const connectDB = async () => {
  await mongoose.connect("mongodb+srv://kumar_db_user:nS8hEQrsUpaBOVRk@cluster0.zutmhw8.mongodb.net/devTinder");
};

module.exports = connectDB;

