const express = require('express');
const router = express.Router();
const upload = require('../utils/upload/multer');
const Product = require('../models/Product');

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { description, size, price, place } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const newProduct = new Product({
      description,
      size,
      price,
      place,
      imagePath: req.file.path
    });
    const savedProduct = await newProduct.save();
    res.status(201).json({
      message: 'Product uploaded successfully',
      product: savedProduct
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/allproduct', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;