const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  componentName: { type: String, default: "image" },
  componentPath: { type: String, default: "./Components/MyImage/MyImage" },
  src: String,
});

module.exports = mongoose.model("Image", imageSchema);
