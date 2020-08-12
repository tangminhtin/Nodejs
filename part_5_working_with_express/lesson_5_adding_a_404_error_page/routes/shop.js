// import express module
const express = require('express');

// get router
const router = express.Router();

// listen user type url /
router.get('/', (req, res, next) => {
    res.send('<h1>This is the Shop!</h1>');
});

// export router
module.exports = router;
