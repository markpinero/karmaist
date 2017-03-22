module.exports = app => {
  const _ = require('lodash'),
    config = require('./config'),
    fetch = require('request-promise');

  app.get('/api/retrieveNewData', (req, res) => {
    fetch(
      `https://todoist.com/API/v7/user?token=ff7405e4dab6e7d15c7da9aa611bd2638a6aaf48`
    ).then(response => {
      res.send(response);
      // send props to react frontend
    });
  });
};
