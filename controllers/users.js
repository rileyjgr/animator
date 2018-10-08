const User = require('../models/users');


module.exports = {
  signUp: async (req, res, next) => {
    const {email, password, first, last } = req.value.body;

    const foundUser = await User.findOne({email});
    if (foundUser) {
      return res.status(403).json({error: "email already exists"});
    } else {

      console.log('Your unique id is: ');
      const newUser = new User({first, last, email, password});

      await newUser.save();
      console.log(newUser);
      res.json({user: 'created'});
      next();
    }
  },

  signIn: async (req, res, next) => {
    const {email, password} = req.value.body;

    const foundUser = User.findOne({email, password});
    console.log(foundUser);
    if (foundUser) {
      res.json({res:"Logged in"});
      next();
      return res.status(418).json({serverSays: "I am a teapot. I cannot brew coffee. But you are who you say you are... I think."});
    } else {
      return res.status(403).json({error: "Email doesn't exist."});
    }
  },
  addProfile: async (req, res, next) =>{
    const {email, password, pic, desc} = req.value.body;

    const foundUser = await User.findOne({email, password});

    if(foundUser) {
      const newPicture = await User.update(foundUser, function (err, user) {
        user.picture = pic;
        user.desc = desc;

        user.save(function (err) {
          if (err) {
            console.log(err);
          }
        });
      });
    }

  },

  profile: async (req, res, next) =>{
    const user = req.params.first;
    const foundUser = await User.findOne(user);
    const page = require("../public/profile.html");

    if (foundUser) {
      return res.sendFile(page);

    }
  }
};