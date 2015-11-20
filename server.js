/* Dependencies
-------------------------------------------------*/
var express = require('express'),
   mongoose = require('mongoose'),
 bodyParser = require('body-parser');


/* MongoDB
-------------------------------------------------*/
mongoose.connect('mongodb://localhost/restful-node');


/* Express
-------------------------------------------------*/
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/* Routes
-------------------------------------------------*/
app.use('/api', require('./routes/api'));


/* Server config
-------------------------------------------------*/
app.listen(9000);
console.log('api is running on port 9000...');

