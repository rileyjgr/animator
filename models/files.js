const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const filesSchema = new Schema({
  type: String,
  data: Buffer
});

//Create a model

const Files = mongoose.model("files", filesSchema);

// Export the model

module.exports = Files;
