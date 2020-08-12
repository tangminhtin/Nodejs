// import express
const express = require('express');

// import body parser to get content of request
const bodyParser = require('body-parser');

// create an application
const app = express();

// encode of body content
app.use(bodyParser.urlencoded({extended: true}));

// adding the Add Product middleware
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// adding the product middleware
// app.get('/product', (req, res, next) => {
// app.use('/product', (req, res, next) => {
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');  // redirect to home
});

// adding the home middleware
app.use('/', (req, res, next) => {
    res.send('<h1>This is the Home page!</h1>');
});

// listener request
app.listen(3000);
