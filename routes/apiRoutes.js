const bodyParser = require("body-parser");
const api = require("../api");
const talkr = require("talkr-apng");
const path = require("path");
// https://www.npmjs.com/package/node-wikipedia

// https://www.npmjs.com/package/wikijs
// https://www.npmjs.com/package/node-wikipedia

module.exports = function(app) {
  const urlencodedParser = bodyParser.urlencoded({ extended: false });
  const parseJson = bodyParser.json();

  // post to our api
  app.post("/api/search", urlencodedParser, parseJson, function(req, res) {
    api.wiki.push(
      req.body.then(function(search) {
        res.json(search);
        console.log(search);
      })
    );
  });
};
