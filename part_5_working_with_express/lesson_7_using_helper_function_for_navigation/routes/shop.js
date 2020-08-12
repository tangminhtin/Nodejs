// import path
const path = require('path');

// import path of root directory
const rootDir = require('../util/path');

// import express module
const express = require('express');
const { dir } = require('console');

// get router
const router = express.Router();

// listen user type url /
router.get('/', (req, res, next) => {
    // res.send('<h1>This is the Shop!</h1>');
    // __dirname holds the absolute path on our operating system
    // serving html pages
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

// export router
module.exports = router;
