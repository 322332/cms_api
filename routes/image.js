var express = require("express");
var router = express.Router();
var uuid = require("uuid");

multer = require("multer");

var storage = multer.diskStorage({
  destination: "public/images/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

var carousel = require("../models/image");

//menu
router.post("/add", upload.array("myFile", 1), async function (req, res, next) {
  const images = [];
  console.log(req.body.id);
  console.log(req.files);

  await req.files.map((item) => {
    images.push("/images/"+item.filename);
  });

  console.log();
  const cr = {
    id: req.body.id,
    src: images[0],
  };

  const car = new carousel(cr);

  await car
    .save()
    .then(() => res.json("success"))
    .catch((err) => res.json("hata"));
});

router.post("/delete", async function (req, res, next) {
  await carousel
    .findOneAndDelete({ id: req.body.id })
    .then((doc) => res.json("success"))
    .catch((err) => res.json(err));
});

router.post("/getAll", async function (req, res, next) {
  await carousel
    .find({})
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
});

module.exports = router;
