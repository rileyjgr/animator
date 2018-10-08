const express = require("express");
const router = require("express-promise-router")();
// const router = express.Router();

app = express();

const { validateBody, schemas } = require("../helpers/routeHelpers");

const UsersController = require("../controllers/users");
// /users/signup
router
  .route("/signup")
  .post(validateBody(schemas.authSchema), UsersController.signUp);

// /users/signin
router
  .route("/signin")
  .post(validateBody(schemas.authSchema), UsersController.signIn);

router
  .route("/update")
  .post(validateBody(schemas.authSchema), UsersController.profile);

router
  .route("/:user")
  .get(UsersController.profile);

module.exports = router;
