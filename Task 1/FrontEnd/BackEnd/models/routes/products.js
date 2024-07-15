const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
});

module.exports = router;