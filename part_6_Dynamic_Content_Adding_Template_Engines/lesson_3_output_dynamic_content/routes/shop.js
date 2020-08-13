// import path
const path = require('path');

// import express module
const express = require('express');

// import path of root directory
const rootDir = require('../util/path');

// import admin data
const adminData = require('./admin');

// get router
const router = express.Router();

// listen user type url /
router.get('/', (req, res, next) => {
    // get product from admin data
    const products = adminData.products;

    // render shop.pug page, passing products data into shop.pug page
    res.render('shop', {prods: products, docTitle: 'Shop'});
});

// export router
module.exports = router;
