const Product = require("../models/productModel")



// Create Product
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success:true,
    product
  })
}


exports.getAllProducts = async (req, res) => {
  const products = await Product.find()
  res.status(200).json({
    message : "Route is working fine",
    success:true,
    products
  })
}