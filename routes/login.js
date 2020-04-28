const Users = require('../Models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/jwtConfig');

module.exports = (app) => {
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
    try {
      Users.findOne({
        where: {
          username,
        },
      }).then((user) => {
        if (user == null) {
          console.log("USER: ",user)
          return res.json({ message: 'Incorrect username' });
        }
        bcrypt.compare(password, user.password).then((response) => {
          if (response !== true) {
            console.log('passwords do not match');
            return res.json({ message: 'passwords do not match' });
          }

          const token = jwt.sign({ id: user.username }, jwtSecret.secret, {
            expiresIn: 60 * 60,
          });
          console.log("Token: ", token)
          console.log('user found & authenticated');
          return res.json({ user: user,
          token: token,
        message: 'user found & logged in' });
        });
      });
    } catch (err) {
      console.log(err);
    }
    //       }).then(user => {
    //         const token = jwt.sign({ id: user.username }, jwtSecret.secret, {
    //           expiresIn: 60 * 60,

    //         });
    //         console.log("User",user);
    //         console.log("token:",token)
    //         res.status(200).send({
    //           user:user,
    //           auth: true,
    //           token,
    //           message: 'user found & logged in',
    //         });
    //       });
    //     });
    //   }
    // })(req, res, next);
  });
};
