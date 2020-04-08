const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('morgan');
const passport = require('passport');

const API_PORT = process.env.API_PORT || 5000;

require('./config/passport');

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(passport.initialize());

require('./routes/login')(app);
require('./routes/signup')(app);

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));

module.exports = app