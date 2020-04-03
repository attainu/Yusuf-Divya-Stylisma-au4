const express = require('express');
const app = express();
const authRoute = require('./routes/auth'); //routes
const postroute = require('./routes/post');
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(cors());

//route middleware
app.use('/', authRoute);
app.use('/posts', postroute);

module.exports = app;
