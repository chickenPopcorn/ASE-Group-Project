var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require("./routes/index");
var mongoose = require('mongoose');


mongoose.connect("mongodb://user:user@ds049466.mlab.com:49466/tinyurl");

app.use("/public",
    express.static(__dirname + "/public")
);

app.use("/api/v1", restRouter);

app.use("/:shortUrl", redirectRouter);
//colom means varaible after it

app.use("/", indexRouter);

app.listen(3000);