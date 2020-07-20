const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  caption: String,
  link: String,
  className: String,
  src: String,
  alt: String,
});

const carouselSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  componentName: { type: String, default: "carousel" },
  componentPath: { type: String, default: "./Components/Carousel/Carousel" },
  items: [itemSchema],
});

module.exports = mongoose.model("Carousel", carouselSchema);
