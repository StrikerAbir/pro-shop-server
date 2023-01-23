const express = require("express");
const products = require("../controller/product.controller");

const router = new express.Router();

router.get("/getProducts/:id", products.getProducts);
router.get("/getProductDetails/:id",products.getProductDetails)


module.exports = router;
