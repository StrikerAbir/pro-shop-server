const Products = require("../models/productSchema");

const products = {
  // for getting single category products
  getProducts: async (req, res) => {
    try {
      const cat_id = req.params.id;
      // console.log(cat_id);
      const result = await Products.find({ category_id: cat_id });
      // console.log(result);
      res.send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // for product details
    getProductDetails: async (req, res) => {
        try {
            const product_id = req.params.id;
            const result = await Products.find({ _id: product_id });
            
          res.send(result)
        } catch (error) {
             res.status(500).send(error.message);
      }
  }
};

module.exports = products;
