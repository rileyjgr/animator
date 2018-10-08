const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const aniSchema = new Schema({
  first: String,
  title: String,
  animation: String,
  postId: String
});

//Create a model

const Animation = mongoose.model("animation", aniSchema);

// Export the model

module.exports = Animation;