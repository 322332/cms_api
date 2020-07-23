var express = require("express");
var router = express.Router();

const menu = require("../models/menu");
const content = require("../models/content");
const carousel = require("../models/carousel");
const image = require("../models/image");

/* toplu component object dönecek*/
router.post("/", async function (req, res, next) {
  const menuDoc = await menu.countDocuments({});
  const contentDoc = await content.countDocuments({});
  const carouselDoc = await carousel.countDocuments({});
  const imageDoc = await image.countDocuments({});

  const arr = {
    menuSize: menuDoc,
    contentSize: contentDoc,
    carouselSize: carouselDoc,
    imageSize: imageDoc,
  };

  res.json(arr);
});

module.exports = router;
