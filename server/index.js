const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');

app.set('port', process.env.PORT || 3001);

app.use(express.static('public'));
app.use(morgan('common'));
app.use(jsonParser);

app.use({
  session: {
    secret: config.session.secret,
    resave: false,
    saveUninitialized: false
  }
});
app.use(passport.initialize());
app.use(passport.session());

const auth = require('./auth')(app);

module.exports = app;
