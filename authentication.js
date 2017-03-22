module.exports = app => {
  const config = require('./config'),
    passport = require('passport'),
    todoistStrategy = require('passport-todoist').Strategy,
    { User } = require('./models/user');

  passport.serializeUser(function(user, done) {
    done(null, user);
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
        User.findOneAndUpdate(
          { id: todoist.id },
          { upsert: true },
          (err, user) => {
            return callback(err, user);
          }
        );
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
    '/auth/callback',
    passport.authenticate('todoist', {
      successRedirect: '/auth/complete',
      failureRedirect: '/dash'
    })
  );
  app.get('/auth/complete', (req, res) => {
    // req.session.user = req.session.passport.user;
    // let session = req.session.accessToken;
    console.log(req.session);
    req.headers['X-AUTH-TOKEN'] = req.session.passport.user.token;
    // res.cookie('tid', req.session.passport.user.token, {
    //   domain: 'http://localhost:3000',
    //   path: '/'
    // });
    res.redirect('http://localhost:3000/test');
  });

  app.get('/user/data', (req, res) => {
    console.log(req.session);
    res.end();
  });
};
