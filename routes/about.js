var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.json({ message: "This is the about page." });
});

module.exports = router;
