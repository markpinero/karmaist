const express = require('express'),
  app = express(),
  config = require('./config'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  jsonParser = bodyParser.json(),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  passport = require('passport');
mongoose.Promise = require('bluebird');

app.use(express.static('public'));
app.use(express.static(__dirname + '/'));
app.use(morgan('common'));
app.use(jsonParser);
app.use(
  session({
    secret: config.session.secret,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

let auth = require('./authentication')(app);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

if (app.get('env') !== 'production') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

if (process.env.NODE_ENV !== 'production') {
  mongoose.connect('mongodb://localhost/karma-dev').then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Listening on ${process.env.PORT || 3001}`);
    });
  });
}

module.exports = app;
