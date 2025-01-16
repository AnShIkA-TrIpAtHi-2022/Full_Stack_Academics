const express = require('express');
const router = express.Router();
const {showAllProducts, createProduct, updateProduct, deleteProduct} = require('../controllers/productController');

router.get('/product/showAll', showAllProducts)

router.post('/product/create', createProduct)

router.put('/product/:id', updateProduct)

router.delete('/product/delete/:id', deleteProduct)

module.exports = router;