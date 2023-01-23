const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
  },
  image: {
    type: String,
  },
  category_id: {
    type: String,
  },
});

const Category = mongoose.model("category", categorySchema);
module.exports = Category;
