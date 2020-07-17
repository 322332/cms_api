const mongoose = require("mongoose");

const linksSchema = new mongoose.Schema({
  link: String,
  target: String,
});

const menuSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  componentName: { type: String },
  menuHeader: { type: String },
  links: [linksSchema],
});

module.exports = mongoose.model("Menu", menuSchema);
