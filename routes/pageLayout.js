var express = require("express");

var router = express.Router();

var page = require("../models/layout");

router.post("/save", async function (req, res, next) {
  const gelen = req.body;
  const char = new page(gelen);
  await page
    .remove({ id: req.body.id })
    .then(() => {
      console.log("silindi");
    })
    .catch(() => res.json("hata"));

  await char
    .save()
    .then(() => res.json("success"))
    .catch((err) => {
      console.log("hata");
    });
});

router.post("/deletePage", async function (req, res, next) {
  await page
    .findOneAndDelete({ id: req.body.id })
    .then(() => res.json("success"))
    .catch((err) => res.json(err));
});

router.post("/getAllPages", async function (req, res, next) {
  await page
    .find({})
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
});

router.post("/getPage", async function (req, res, next) {
  //console.log(req.body.adi);
  await page
    .find({ id: req.body.id })
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
});

module.exports = router;
