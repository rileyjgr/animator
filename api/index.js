const fs = require("fs");
const path = require("path");
const basename = path.basename(module.filename);
let api = {};

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    let model = path.join(__dirname, file);
    api[model.name] = model;
  });

Object.keys(api).forEach(function(modelName) {
  if (api[modelName].associate) {
    api[modelName].associate(api);
  }
});

module.exports = api;
