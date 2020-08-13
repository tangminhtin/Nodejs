// import path
const path = require('path');

// import express
const express = require('express');

// import body parser to get content of request
const bodyParser = require('body-parser');

// import express handlebars
const expressHbs = require('express-handlebars');

// create an application
const app = express();

// register new template engine
app.engine('hbs', expressHbs({
    extname: 'hbs',
    defaultLayout: false,
    layoutsDir: 'views/layouts/'
}));

// find dynamic template view
app.set('view engine', 'hbs');
app.set('views', 'views');

// import adminData, shop
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// encode of body content
app.use(bodyParser.urlencoded({extended: true}));

// register middleware, server static files, grant access public folder
app.use(express.static(path.join(__dirname, 'public')));

// use adminData
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// adding 404 error page
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

// listener request
app.listen(3000);
