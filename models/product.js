/* Dependencies
-------------------------------------------------*/
var restful = require('node-restful'),
   mongoose = restful.mongoose;

/* Schema
-------------------------------------------------*/
var productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

/* Return model
-------------------------------------------------*/
module.exports = restful.model('Products', productSchema);
