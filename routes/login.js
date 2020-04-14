const passport = require("passport")
const Users = require('../Models/Users');
const jwt = require('jsonwebtoken')
const jwtSecret = require('../config/jwtConfig')

module.exports = app => {
    app.post('/login', (req, res, next) => {
      passport.authenticate('login', (err, users, info) => {
        if (err) {
          console.error(`error ${err}`);
        }
        if (info !== undefined) {
          console.error(info.message);
          if (info.message === 'Incorrect username') {
            res.status(401).send(info.message);
          } else {
            res.status(403).send(info.message);
          }
        } else {
          req.logIn(users, () => {
            Users.findOne({
              where: {
                username: req.body.username,
              },
            }).then(user => {
              const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
                expiresIn: 60 * 60,
                
              });
              console.log(user);
              res.status(200).send({
                auth: true,
                token,
                message: 'user found & logged in',
              });
            });
          });
        }
      })(req, res, next);
    });
  };