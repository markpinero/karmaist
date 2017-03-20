module.exports = app => {
  const config = require('./config'),
    passport = require('passport'),
    todoistStrategy = require('passport-todoist').Strategy,
    { User } = require('./models/user');

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(
    'todoist',
    new todoistStrategy(
      {
        clientID: config.clientID,
        clientSecret: config.clientSecret
      },
      (accessToken, refreshToken, todoist, callback) => {
        User.update({ id: todoist.id }, { upsert: true }, (err, user) => {
          return callback(err, user);
        });
      }
    )
  );

  app.get(
    '/auth/todoist',
    passport.authenticate('todoist', {
      scope: 'data:read_write',
      state: 'statedsfkahdfkaj'
    })
  );
  app.get(
    '/auth/todoist/callback',
    passport.authenticate('todoist', {
      session: false,
      successRedirect: 'localhost:3000/dashboard',
      failureRedirect: '/dash'
    })
  );
};
