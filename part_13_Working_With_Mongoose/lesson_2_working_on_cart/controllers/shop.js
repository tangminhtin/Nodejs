// import product, order model
const Product = require('../models/product');
const Order = require('../models/order');

// get all products
exports.getProducts = (req, res, next) => {
    // fetch all products
    Product.find()
        .then((products) => {
            res.render('shop/product-list', {
                prods: products, 
                pageTitle: 'All Products', 
                path: '/products',
            });
        })
        .catch(err => console.log(err));
};

// get product detail
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;

    // another way to get single product with the where condition
    Product.findById(prodId)
        .then((product) => {
            res.render('shop/product-detail', {
                product: product,
                pageTitle: product.title,
                path: "/products"
            });
        })
        .catch(err => console.log(err));
}

// get index
exports.getIndex = (req, res, next) => {
    // fetch all products
    Product.find()
        .then((products) => {
            res.render('shop/index', {
                prods: products, 
                pageTitle: 'Shop', 
                path: '/',
            });
        })
        .catch(err => console.log(err));
};

// get cart
exports.getCart = (req, res, next) => {
    // another way to get cart
    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            const products = user.cart.items;
            res.render('shop/cart', {
                pageTitle: 'Your Cart',
                path:'/cart', 
                products: products
            });
        })
        .catch((err) => console.log(err));
}; 

// add to cart
exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;

    Product.findById(prodId)
        .then((product) => {
            return req.user.addToCart(product);
        })
        .then((result) => {
            console.log(result);
            res.redirect('/cart');
        })
        .catch((err) => console.log(err));
};

// cart delete product
exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user
        .removeFromCart(prodId)
        .then((result) => {
            res.redirect('/cart');
        })
        .catch((err) => console.log(err));
};

// post order
exports.postOrder = (req, res, next) => {
    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            const products = user.cart.items.map(i => {
                return {product: i.productId, quantity: i.quantity};
            });
            // create new order
            const order = new Order({
                products: products,
                user: {
                    name: req.user.name,
                    userId: req.user
                }
            });
            return order.save();
        })
        .then(result => {
            res.redirect('/orders');
        })
        .catch((err) => console.log(err));
}

// get orders
exports.getOrders = (req, res, next) => {
    req.user
        // fetch products table
        .getOrders()
        .then((orders) => {
            res.render('shop/orders', {
                pageTitle: 'Your Order',
                path: '/orders',
                orders: orders
            });
        })
        .catch((err) => console.log(err));
}
