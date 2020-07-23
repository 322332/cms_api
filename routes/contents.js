var express = require("express");
var router = express.Router();

var content = require("../models/content");

router.post("/add", async function (req, res, next) {
  const gelen = req.body;
  const char = new content(gelen);
  await content
    .remove({ id: req.body.id })
    .then(() => {
      console.log("silindi");
    })
    .catch(() => res.json("hata"));

  await char
    .save()
    .then(() => res.json("success"))
    .catch((err) => res.json("hata"));
});

router.post("/getAll", async function (req, res, next) {
  await content
    .find({})
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
});

router.post("/delete", async function (req, res, next) {
  await content
    .findOneAndDelete({ id: req.body.id })
    .then(() => res.json("success"))
    .catch((err) => res.json(err));
});

module.exports = router;
