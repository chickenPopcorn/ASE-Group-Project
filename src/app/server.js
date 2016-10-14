var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var mongoose = require('mongoose');
var useragent = require('express-useragent');
var cors = require('cors');

mongoose.connect("mongodb://user:user@ds049466.mlab.com:49466/tinyurl");

app.use(cors());

app.use("/public",
    express.static(__dirname + "/public")
);

app.use("/node_modules",
    express.static(__dirname + "/node_modules")
);

app.use(useragent.express());

app.use("/api/v1", restRouter);

app.use("/auth", authRouter);

app.use("/:shortUrl", redirectRouter);
//colom means varaible after it

app.use("/", indexRouter);

app.listen(3000);
