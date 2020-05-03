const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('morgan');
const API_PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "./Frontend/public"));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './Frontend/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })



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