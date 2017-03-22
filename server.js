const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  config = require('./config'),
  session = require('express-session'),
  jsonParser = bodyParser.json(),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  passport = require('passport');
mongoose.Promise = require('bluebird');

app.use(express.static('public'));
app.use(
  session({
    secret: config.session.secret
  })
);
app.use(jsonParser);
app.use(passport.initialize());
app.use(passport.session());

let auth = require('./authentication')(app);
let api = require('./api')(app);

mongoose.connect('mongodb://localhost/karma-dev').then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening on ${process.env.PORT || 3001}`);
  });
});

module.exports = app;
