module.exports = app => {
  const config = require("./config"),
    passport = require("passport"),
    todoistStrategy = require("passport-todoist").Strategy,
    { User } = require("./models/user");

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    "todoist",
    new todoistStrategy(
      {
        clientID: config.clientID,
        clientSecret: config.clientSecret
      },
      (accessToken, refreshToken, todoist, callback) => {
        let query = { id: todoist.id };
        let update = { id: todoist.id, token: todoist.access_token };
        console.log(accessToken, refreshToken, todoist, callback);
        User.findOneAndUpdate(query, update, { upsert: true }, (err, user) => {
          console.log(err);
          return callback(undefined, user);
        });
      }
    )
  );

  // TODO: Move to routes
  app.get(
    "/auth/todoist",
    passport.authenticate("todoist", {
      scope: "data:read_write",
      state: "klkhfasdjf"
    })
  );
  app.get(
    "/auth/todoist/callback",
    passport.authenticate("todoist", {
      successRedirect: "/auth/complete",
      failureRedirect: "/"
    })
  );
  app.get("/auth/complete", (req, res) => {
    let userId = req.session.passport.user.id;
    User.findOne({ id: userId }, (err, user) => {
      res.status(200).set("X-AUTH-TOKEN", user.token).json({ message: "sent" });
    });
  });
};
