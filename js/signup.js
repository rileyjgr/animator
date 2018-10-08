// sign up form logic
"use strict";

const signup = document.getElementById("sign-up");

signup.onclick = () => {
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const email = document.getElementById("email_signup").value;
  // const confirmEmail = document.getElementById("email-confirm").value;
  const password = document.getElementById("password_signup").value;
  // const confirmPassword = document.getElementById("password-confirm").value;
  // noinspection JSAnnotator
  const data = {
    first: firstName,
    last: lastName,
    email: email,
    password: password
  };

  // data.first = ;
  // data.last = ;
  // data.email = ;
  // data.password = ;

  const signUpUser = () => {
    const url = "https://intelman.herokuapp.com/users/signup";
    axios
      .post(url, data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  console.log(data);
  signUpUser();
};

const login = document.getElementById("signIn");

login.onclick = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = {
    email: email,
    password: password
  };

  const url = "https://intelman.herokuapp.com/users/signin";
  axios
    .post(url, data)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
