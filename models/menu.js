const mongoose = require("mongoose");
const sublinks = new mongoose.Schema({
  linkName: String,
  target: String,
});

const linksSchema = new mongoose.Schema({
  link: sublinks,
  sublink: [sublinks],
});

const menuSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  componentName: { type: String, default: "menu" },
  componentPath: { type: String, default: "./Components/Menu/Menu" },
  menuHeader: { type: String },
  links: [linksSchema],
});

module.exports = mongoose.model("Menu", menuSchema);
