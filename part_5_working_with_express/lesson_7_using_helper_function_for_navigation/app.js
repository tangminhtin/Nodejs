// import path
const path = require('path');

// import express
const express = require('express');

// import body parser to get content of request
const bodyParser = require('body-parser');

// create an application
const app = express();

// import router of admin, shop
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// encode of body content
app.use(bodyParser.urlencoded({extended: true}));

// register middleware, server static files, grant access public folder
app.use(express.static(path.join(__dirname, 'public')));

// use adminRoutes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// adding 404 error page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// listener request
app.listen(3000);
