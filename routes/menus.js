var express = require("express");
var router = express.Router();

var link = require("../models/menu");

//menu
router.post("/add", async function (req, res, next) {
  const gelen = req.body;
  const menu = new link(gelen);
  console.log(gelen);

  await link
    .remove({ id: req.body.id })
    .then(() => {})
    .catch(() => res.json("silme hatası"));

  await menu
    .save()
    .then(() => res.json("success"))
    .catch((err) => res.json("hata"));
});

router.post("/getAll", async function (req, res, next) {
  await link
    .find({})
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
});

module.exports = router;
