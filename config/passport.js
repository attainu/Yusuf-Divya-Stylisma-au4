const jwtSecret = require('./jwtConfig');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Users = require('../Models/Users');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(
  'register',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true,
      session: false,
    },
    (req, username, password, done) => {
      console.log(username);
      console.log(req.body.email);

      try {
        Users.findOne({
          where: {
            username: username,
          },
        }).then((user) => {
          if (user != null) {
            console.log('username already taken');
            return done(null, false, {
              message: 'username already taken',
            });
          }
          bcrypt.hash(password, 10).then((hashedPassword) => {
            Users.create({
              username,
              password: hashedPassword,
              email: req.body.email,
            }).then((user) => {
              console.log('user created');
              return done(null, user);
            });
          });
        });
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    (username, password, done) => {
      try {
        Users.findOne({
          where: {
            username,
          },
        }).then((user) => {
          if (user === null) {
            return done(null, false, { message: 'Incorrect username' });
          }
          bcrypt.compare(password, user.password).then((response) => {
            if (response !== true) {
              console.log('passwords do not match');
              return done(null, false, { message: 'passwords do not match' });
            }
            console.log('user found & authenticated');
            return done(null, user);
          });
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: jwtSecret.secret,
};

passport.use(
  'jwt',
  new JwtStrategy(opts, (jwt_payload, done) => {
    try {
      Users.findOne({
        where: {
          id: jwt_payload.id,
        },
      }).then((user) => {
        if (user) {
          console.log('user found in db in passport');
          done(null, user);
        } else {
          console.log('user not found in db');
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  })
);
