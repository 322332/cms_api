var express = require("express");
var router = express.Router();
const User = require("../models/users");
const jwt = require("jsonwebtoken");

//register user
router.post("/signup", function(req, res, next) {
  new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }).save((err, user) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(user);
  });
});

//find user
router.post("/signin", function(req, res, next) {
  User.findOne(
    { username: req.body.username, password: req.body.password },
    (err, user) => {
      if (err) return res.status(400).send(err);
      if (user == null) res.status(200).send("user_not_found");
      const token = jwt.sign(user.id, "secretkey");
      return res.status(200).send(token);
    }
  );
});

module.exports = router;
