const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Url = require("url");
//Create Schema
const userSchema = new Schema({
  first: String,
  last: String,
  password: String,
  email: String,
  picture: String,
  desc: String
});

//Create a model

const User = mongoose.model("user", userSchema);

// Export the model

module.exports = User;
