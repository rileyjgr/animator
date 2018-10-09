"use strict";

let userData = [];
const propic = document.getElementById("profile_pic");
const name = document.getElementById("name");

const getUserData = () => {
  const url = window.location.href;
  axios
    .get(url)
    .then(function(res) {

      propic.img = res.picture;
      name.innerText = res.desc;
      console.log(res);
    })
    .catch(function(error) {
      console.log(error);
    });

};


document.addEventListener("load", getUserData);
