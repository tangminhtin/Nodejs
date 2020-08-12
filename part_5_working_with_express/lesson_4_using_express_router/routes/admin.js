// import express module
const express = require('express');

// get router
const router = express.Router();

// listen user type url add-product
router.get('add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// handler add-product
router.post('product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

// export router
module.exports = router;
