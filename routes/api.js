/* Dependencies
-------------------------------------------------*/
var express = require('express'),
    router = express.Router();

/* Models
-------------------------------------------------*/
var Product = require('../models/product');

/* Routes
-------------------------------------------------*/
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');


/* Returning router
-------------------------------------------------*/
module.exports = router;
