const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  category_id: {
    type: String,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  location: {
    type: String,
  },
  resale_price: {
    type: String,
  },
  original_price: {
    type: String,
  },
  years_of_use: {
    type: String,
  },
  years_of_buy: {
    type: String,
  },
  product_condition: {
    type: String,
  },
  post_time: { type: String },
  seller_name: { type: String },
  seller_Phone: { type: String },
    seller_email: { type: String },
  description: { type: String}
});

const Products = mongoose.model("product", productsSchema);
module.exports = Products;
