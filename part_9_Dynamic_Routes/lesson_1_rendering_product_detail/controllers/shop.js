// import product model
const Product = require('../models/product');

// get all products
exports.getProducts = (req, res, next) => {
    // fetch all products
    Product.fetchAll(products => {
        // render shop.pug page, passing products data into shop.hbs page
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'All Products', 
            path: '/product',
        });
    });
};

// get product detail
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle: "Product Detail",
            path: "/product"
        });
    });
}

// get index
exports.getIndex = (req, res, next) => {
     // fetch all products
     Product.fetchAll(products => {
        // render shop.pug page, passing products data into shop.hbs page
        res.render('shop/index', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/',
        });
    });
};

// get cart
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path:'/cart'
    });
};

// get orders
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Order',
        path: '/orders'
    });
}

// get checkout
exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    });
};
