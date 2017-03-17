const express = require("express"),
  app = express(),
  config = require("./config"),
  session = require("express-session"),
  bodyParser = require("body-parser"),
  jsonParser = bodyParser.json(),
  morgan = require("morgan"),
  mongoose = require("mongoose"),
  passport = require("passport");
mongoose.Promise = require("bluebird");

app.use(express.static("public"));
app.use(express.static(__dirname + "/"));
app.use(jsonParser);
app.use(
  session({
    secret: config.session.secret,
    key: config.session.key
  })
);
app.use(passport.initialize());
app.use(passport.session());

let auth = require("./authentication")(app);

if (process.env.NODE_ENV !== "production") {
  mongoose.connect("mongodb://localhost/karma-dev").then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Listening on ${process.env.PORT || 3001}`);
    });
  });
}

module.exports = app;
