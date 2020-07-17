var express = require("express");
var router = express.Router();
const users = require("../models/users");

/* GET home page. */
router.get("/", function(req, res, next) {
  users.find({}, (err, user) => {
      if(err) return res.status(400).send(err);
    res.status(200).send(user);
  });
});

module.exports = router;
