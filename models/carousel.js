const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  caption: String,
  className: String,
  src: String,
  alt: String,
});

const carouselSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  componentName: { type: String },
  items: [itemSchema],
});

module.exports = mongoose.model("Carousel", carouselSchema);
