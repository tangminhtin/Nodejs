// import path
const path = require('path');

// import express module
const express = require('express');

// import shop controller
const shopController = require('../controllers/shop');

// get router
const router = express.Router();

// listen user type url /
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

// export router
module.exports = router;
