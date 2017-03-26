const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  config = require('./config'),
  session = require('express-session'),
  redisStore = require('connect-redis')(session),
  redis = require('redis'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  path = require('path');
const client = redis.createClient();
mongoose.Promise = require('bluebird');

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(bodyParser.json());
app.use(
  session({
    store: new redisStore({
      host: 'localhost',
      port: 6379,
      client: client,
      ttl: config.session.ttl
    }),
    key: config.session.key,
    secret: config.session.secret,
    saveUninitialized: false,
    resave: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Use react frontend
app.get('/dashboard', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

let auth = require('./authentication')(app);
// let api = require('./api')(app);

mongoose.connect('mongodb://localhost/karma-dev').then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening on ${process.env.PORT || 3001}`);
  });
});

module.exports = app;
