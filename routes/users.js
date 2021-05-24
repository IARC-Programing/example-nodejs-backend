const express = require("express");
const router = express.Router();

router.get("/list", function (req, res, next) {
  res.send("User list");
});

/* GET users listing. */
router.get("/", function (req, res, next) {});

module.exports = router;
