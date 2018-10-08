const express = require("express");
const router = require("express-promise-router")();
// const router = express.Router();

app = express();

const { validateBody, schemas } = require("../helpers/routeHelpers");
const AnimationController = require("../controllers/animation");

router
  .route("/api")
  .post(validateBody(schemas.aniSchema), AnimationController.gen);

router
  .route("/:postId")
  .get(AnimationController.getPage)
  .post(validateBody(schemas.aniSchema), AnimationController.mkPage);

// app.get("/:postId", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/search.html"));
// });

module.exports = router;
