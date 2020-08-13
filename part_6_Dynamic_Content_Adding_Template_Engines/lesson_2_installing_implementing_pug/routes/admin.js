// import path
const path = require('path');

// import express module
const express = require('express');

// import path of root directory
const rootDir = require('../util/path');

// get router
const router = express.Router();

// store products into array
const products = [];

// /admin/add-product => GET // listen user type url add-product
router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // serving html pages
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST // handler add-product
router.post('/add-product', (req, res, next) => {
    // console.log(req.body);
    // add new element to product
    products.push({title: req.body.title});
    res.redirect('/');
});

// export router and products
exports.routes = router;
exports.products = products;
