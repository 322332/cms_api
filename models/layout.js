const mongoose = require("mongoose");

const mdSchema = new mongoose.Schema({
  span: Number,
  offset: Number,
});

const colsSchema = new mongoose.Schema({
  colID: String,
  componentID: String,
  componentName: String,
  classname: String,
  md: mdSchema,
});

const rowsSchema = new mongoose.Schema({
  rowID: String,
  cols: [colsSchema],
});

const pageSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  pageName: { type: String, unique: true },
  pageLink: { type: String, unique: true },
  rows: [rowsSchema],
});

module.exports = mongoose.model("Page", pageSchema);
