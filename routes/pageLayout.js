var express = require("express");

var router = express.Router();

var page = require("../models/layout");

router.post("/save", async function (req, res, next) {
  const gelen = req.body;
  const char = new page(gelen);
  await page
    .remove({ pageName: req.body.pageName })
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

router.post("/getAllPages", async function (req, res, next) {
  await page
    .find({})
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
});

router.post("/getPage", async function (req, res, next) {
  //console.log(req.body.adi);
  await page
    .find({ pageName: req.body.pageName })
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
});

router.post("/getPageNames", (req, res, next) => {
  page.find({}).then((doc) => {
    const arr = [];
    doc.map((item) => {
      arr.push(item.pageName);
    });
    res.json(arr);
  });
});

module.exports = router;
