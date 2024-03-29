// import product model
const Product = require('../models/product');
const Cart = require('../models/cart');

// get all products
exports.getProducts = (req, res, next) => {
    // fetch all products
    Product.findAll()
    .then((products) => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'All Products', 
            path: '/product',
        });
    })
    .catch(err => console.log(err));
};

// get product detail
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    // Product.findByPk(prodId)
    //     .then((product) => {
    //         res.render('shop/product-detail', {
    //             product: product,
    //             pageTitle: "Product Detail",
    //             path: "/product"
    //         });
    //     })
    //     .catch(err => console.log(err));

    // another way to get single product with the where condition
    Product.findAll({where: {id: prodId}})
    .then((products) => {
        res.render('shop/product-detail', {
            product: products[0],
            pageTitle: products[0].title,
            path: "/product"
        });
    })
    .catch(err => console.log(err));
}

// get index
exports.getIndex = (req, res, next) => {
    // fetch all products
    Product.findAll()
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
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for (product of products) {
                const cartProductData = cart.products.find(prod => prod.id === product.id);
                if (cartProductData) {
                    cartProducts.push({productData: product, qty: cartProductData.qty});
                }
            }
            res.render('shop/cart', {
                pageTitle: 'Your Cart',
                path:'/cart', 
                products: cartProducts
            });
        });
    });
};

// add to cart
exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    })
    res.redirect('/cart');
};

// cart delete product
exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.deleteProduct(prodId, product.price);
        res.redirect('/cart');
    })
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
