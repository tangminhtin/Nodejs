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
    // render add-product.pug page and passing pageTitle
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
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
