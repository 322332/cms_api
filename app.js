var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var verify = require("./config/verify");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

//MongoDB connection
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/cms", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("connected"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", verify, indexRouter);
app.use("/users", usersRouter);

module.exports = app;
