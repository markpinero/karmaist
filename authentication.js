module.exports = app => {
  const config = require('./config'),
    passport = require('passport'),
    todoistStrategy = require('passport-todoist').Strategy,
    { User } = require('./models/user');

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(id, done) {
    // what does this do
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

  // @TODO: generate random state
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
      successRedirect: '/auth/done',
      failureRedirect: '/dash'
    })
  );
  app.get('/auth/done', (req, res) => {
    // res.setHeader('X-AUTH-TOKEN', req.session.passport.user.token);
    // res.json(req.session.config.session.key);
    res.redirect('/dashboard');
  });

  app.get('/user/data', (req, res) => {
    console.log(req.session);
    res.end();
  });
};

// 1. user clicks login
// 2. application logs in with todoist api
// 3. if matching userID, `Set-Cookie` header to authenticate further pages
// 4. cookie will be added to all requests
// 5. authenticate restricted pages with cookie
