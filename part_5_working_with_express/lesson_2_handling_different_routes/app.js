// import express
const express = require('express');

// create an application
const app = express();

// This middleware always runs
app.use('/', (req, res, next) => {
    console.log('This middleware always runs!');
    next();
});

// adding the Add Product middleware
app.use('/add-product', (req, res, next) => {
    console.log('In the Add Product middleware!');
    // working with middleware
    res.send('<h1>This page of "Add Product"!</h1>');
});

// adding the home middleware
app.use('/', (req, res, next) => {
    console.log('In the home middleware!');
    // working with middleware
    res.send('<h1>The home middleware is working!</h1>');
});

// listener request
app.listen(3000);
