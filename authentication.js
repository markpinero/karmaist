module.exports = (app) => {
  const config            = require('./config')
      , passport          = require('passport')
      , todoist           = require('passport-todoist')
      , todoistStrategy   = todoist.Strategy
      , { User }          = require('./models/user');

  passport.use('todoist', new todoistStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret
  }, (accessToken, done) => {
    User.findOrCreate({ TodoistID: todoist.id }, (err, user) => {
      console.log(`${user}, ${accessToken}`);
      return done(err, user);
    });
    }
  ));

  app.get('/auth/todoist', passport.authenticate('todoist', { scope: 'data:read_write', 'state': 'statedsfkahdfkaj' }));
  app.get('/auth/todoist/callback', passport.authenticate('todoist', {successRedirect: '/profile', failureRedirect: '/'}));
}