// import path
const path = require('path');

// import express
const express = require('express');

// import body parser to get content of request
const bodyParser = require('body-parser');

// import error controller
const errorController = require('./controllers/error');

// import sequelize
const sequelize = require('./util/database');

// import product, user, cart, cart item, order, order item model
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

// create an application
const app = express();

// find dynamic template view
app.set('view engine', 'ejs');
app.set('views', 'views');

// import adminRoutes, shopRoutes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const Cart = require('./models/cart');
// const Product = require('./models/product');

// encode of body content
app.use(bodyParser.urlencoded({extended: true}));

// register middleware, server static files, grant access public folder
app.use(express.static(path.join(__dirname, 'public')));

// register middleware
app.use((req, res, next) => {
    User.findByPk(1)
        .then((user) => {
            req.user = user;
            next();
        })
        .catch((err) => console.log(err));
});

// use adminRoutes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// adding 404 error page
app.use(errorController.get404);

// set one to many relationship
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);

// set one to many, many to many relationships
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});

Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, {through: OrderItem});

// create tables in database
// sequelize.sync({force: true}) // overwrite database
sequelize.sync()
    // create dummy user data
    .then((result) => {
        // console.log(result)
        return User.findByPk(1);
    })
    .then((user) => {
        if (!user) {
            return User.create({name: 'Minh Tin', email: 'minhtin@gmail.com'});
        } 
        return user;
    })
    .then((user) => {
        // console.log(user);
        return user.createCart();
    })
    .then((cart) => {
        // listener request
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err)
    })
