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
    console.log('shopjs', adminData.products);

    // __dirname holds the absolute path on our operating system, serving html pages
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

// export router
module.exports = router;
