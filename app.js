var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var verify = require("./config/verify");

var indexRouter = require("./routes/index");
var getusers = require("./routes/getusers");
var usersRouter = require("./routes/users");

var componentsRouter = require("./routes/components");
var pageLayoutRouter = require("./routes/pageLayout");

var menusRouter = require("./routes/menus");
var carouselRouter = require("./routes/carousel");
var contentRouter = require("./routes/contents");

var app = express();

//MongoDB connection
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/cms", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected"));

  

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//cors
app.use(cors());


app.use("/api/getUsers", verify, getusers);
app.use("/api/pageLayout", verify, pageLayoutRouter);

app.use("/api/carousel", carouselRouter);
app.use("/api/menu", verify, menusRouter);
app.use("/api/content", verify, contentRouter);

app.use("/api/components", verify, componentsRouter);

//register login
app.use("/users", usersRouter);



module.exports = app;
