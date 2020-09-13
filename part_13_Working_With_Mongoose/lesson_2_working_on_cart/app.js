// import path, express
const path = require('path');
const express = require('express');

// import body parser to get content of request
const bodyParser = require('body-parser');

// import mongoose
const mongoose = require('mongoose');

// import error controller
const errorController = require('./controllers/error');

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
    User.findById('5f5d9a7b1026444f164c8bf7')
        .then((user) => {
            req.user = user;
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
mongoose
    .connect('mongodb+srv://tangminhtin:6Pb8I4g24ZChkFk0@cluster0.ze1a2.mongodb.net/shop?retryWrites=true&w=majority')
    .then(result => {
        User.findOne()
            .then((user) => {
                if(!user) {
                    const user = new User({
                        name: 'Minh Tin Tang',
                        email: 'minhtintang@gmail.com',
                        cart: {
                            items: []
                        }
                    });
                    user.save();
                }
            });
        app.listen(3000);
    })
    .catch(err => console.log(err));
