var express = require("express");
var router = express.Router();

const menu = require("../models/menu");
const content = require("../models/content");
const carousel = require("../models/carousel");
const image = require("../models/image");

/* toplu component object dönecek*/
router.post("/", async function (req, res, next) {
  const menuDoc = await menu.find({}, "-_id -__v");
  const contentDoc = await content.find({}, "-_id -__v");
  const carouselDoc = await carousel.find({}, "-_id -__v");
  const imageDoc = await image.find({}, "-_id -__v");

  const arr = [...menuDoc, ...contentDoc, ...carouselDoc, ...imageDoc];

  res.json(arr);
});

module.exports = router;
