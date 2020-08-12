// import express
const express = require('express');

// create an application
const app = express();

// import body parser to get content of request
const bodyParser = require('body-parser');

// import router of admin, shop
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// encode of body content
app.use(bodyParser.urlencoded({extended: true}));

// use adminRoutes
app.use(adminRoutes);
app.use(shopRoutes);

// listener request
app.listen(3000);
