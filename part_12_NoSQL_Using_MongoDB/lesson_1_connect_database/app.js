// import path
const path = require('path');

// import express
const express = require('express');

// import body parser to get content of request
const bodyParser = require('body-parser');

// import error controller
const errorController = require('./controllers/error');

// import mongodb
const mongoConnect = require('./util/database');

// create an application
const app = express();

// find dynamic template view
app.set('view engine', 'ejs');
app.set('views', 'views');

// import adminRoutes, shopRoutes
const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// encode of body content
app.use(bodyParser.urlencoded({extended: true}));

// register middleware, server static files, grant access public folder
app.use(express.static(path.join(__dirname, 'public')));

// register middleware
app.use((req, res, next) => {
    // User.findByPk(1)
    //     .then((user) => {
    //         req.user = user;
    //         next();
    //     })
    //     .catch((err) => console.log(err));
});

// use adminRoutes
app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// adding 404 error page
app.use(errorController.get404);

// connect database
mongoConnect(() => {
    app.listen(3000);
});
