// import path
const path = require('path');

// import express
const express = require('express');

// import body parser to get content of request
const bodyParser = require('body-parser');

// import error controller
const errorController = require('./controllers/error');

// create an application
const app = express();

// find dynamic template view
app.set('view engine', 'ejs');
app.set('views', 'views');

// import adminRoutes, shop
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
app.use(errorController.get404);

// listener request
app.listen(3000);
