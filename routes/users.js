var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ messag: "This is the users page." });
});

router.post("/signup", function (req, res, next) {
  res.json({ message: "This is the signup page." });
});

module.exports = router;
