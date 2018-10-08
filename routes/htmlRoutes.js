/* eslint-disable prettier/prettier */
const path = require("path");
const express = require("express");

const html = (app) => {
  // Home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  //search page
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });
  app.get("/wikireader", function(req, res){
    res.sendFile(path.join(__dirname, "../public/wikiReader.html"));
  });
  app.get("/trending", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/trending.html"));
  });

  // assets
  app.use("/static/js", express.static(path.join(__dirname, "../js")));

  app.use("/static/parallax.js", express.static(path.join(__dirname, "../node_modules/materialize-css/js/parallax.js")));
  app.use("/static/material.css", express.static(path.join(__dirname, "../node_modules/materialize-css/dist/css/materialize.min.css")));
  app.use("/static/material.js", express.static(path.join(__dirname, "../node_modules/materialize-css/dist/js/materialize.min.js")));
  app.use("/static/css", express.static(path.join(__dirname, "../styles")));
  app.use("/static/index.css", express.static(path.join(__dirname, "../styles/styles.css")));
};

module.exports = html;
