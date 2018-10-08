const Animation = require('../models/animations');
const User = require('../models/users');
const path = require("path");

module.exports = {

  gen: async (req, res, next) => {
    console.log(req.body);
    const {email, first, title, animation} = req.body;
    const foundUser = User.findOne({email});
    console.log(foundUser);

    if (foundUser) {
      const newPost = new Animation({first, title, animation});
      await newPost.save();

      res.get("/:postId");

      next();
    } else {
      return res.status(403).json({error: "Not logged in."});
    }
  },

  mkPage: async(req, res, next) => {
    const {email, first, title, animation, postId} = req.body;
    const foundUser = User.findOne({email});
    const foundPage = Animation.findOne({postId});
    if (foundPage) {
      return res.status(403).json({res: "Page created."});
    } else {
      if (foundUser) {

        const newPost = new Animation({first, title, animation, postId});
        await newPost.save();
        console.log("Ur post id :"+ newPost.postId);
        console.log("ur dir :" +__dirname);
        req.route = newPost.postId;
        console.log(req.route);
        return res.json({text: newPost});

      } else {
        res.status(403).json({error: "Not logged signed up."});
        next();
      }
    }
  },

  getPage: async(req, res) => {
    const postId = res.body;
    await Animation.findOne({postId}, "-animation", function(err, resp){
      // res.json({text: resp});
      res.sendFile(path.resolve(__dirname, "./public/generate.html"));
    });
  }
};
