// import path, express
const path = require('path');
const express = require('express');

// import body parser to get content of request
const bodyParser = require('body-parser');

// import error controller
const errorController = require('./controllers/error');

// import mongodb
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

// create an application
const app = express();

// find dynamic template view
app.set('view engine', 'ejs');
app.set('views', 'views');

// import adminRoutes, shopRoutes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// encode of body content
app.use(bodyParser.urlencoded({extended: true}));

// register middleware, server static files, grant access public folder
app.use(express.static(path.join(__dirname, 'public')));

// register middleware
app.use((req, res, next) => {
    User.findById('5f55c7916732fd17be4d70c5')
        .then((user) => {
            req.user = new User(user.username, user.email, user._id, user.cart);
            next();
        })
        .catch((err) => console.log(err));
});

// use admin and shop routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// adding 404 error page
app.use(errorController.get404);

// connect database
mongoConnect(() => {
    app.listen(3000);
});
