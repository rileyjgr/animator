const pushData = require("./search.js");
const wtf = require("wtf_wikipedia");
const wiki = (res, search) => {
  console.log(search);
  wtf.fetch(search, "en", function(err, resp) {
    if (err) {
      console.log(err);
    }
    pushData(push(resp.json()));
  });

  res.json({
    userSearch: search
  });
};

module.exports = wiki;
