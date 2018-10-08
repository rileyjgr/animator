const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const mongoConnect = process.env.MONGODB_URI || "mongodb://localhost:27017/animate";
mongoose.connect(mongoConnect).then(function(error) {
  if (error) {
    console.log(error);
  }
});

const db = mongoose.connection;
Schema = mongoose.Schema;

db.on("error", console.error.bind(console, "connection error:"));

//once we connect
db.once("open", function() {
  // Middle wares

  app.use(morgan("dev"));
  app.use(bodyParser.json());
  //just a random comment
  // Routes
  // const apiRoute = require("./routes/apiRoutes.js");
  // apiRoute(app);
  const htmlRoute = require("./routes/htmlRoutes.js");
  htmlRoute(app);
  app.use("/animations", require("./routes/animation.js"));
  app.use("/users", require("./routes/users.js"));

  // Start the server

  const port = process.env.PORT || 3000;
  app.listen(port);
});
