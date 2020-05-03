const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('morgan');
const API_PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'Frontend/build')));
      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.resolve(__dirname, 'Frontend/build', 'index.html'));
    });
  }

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
require('./routes/login')(app);
require('./routes/signup')(app);
require('./routes/addproduct')(app);
require('./routes/order')(app);
require('./routes/currentorders')(app)

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));
module.exports = app;