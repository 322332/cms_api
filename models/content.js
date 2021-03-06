const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  componentName: { type: String },
  componentPath:{type:String, default: "./Components/Content/Content"},
  title: { type: String },
  subTitle: { type: String },
  content: { type: String },
});

module.exports = mongoose.model("Content", contentSchema);
