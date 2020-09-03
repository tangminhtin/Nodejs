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
    // another way to get cart
    req.user
        .getCart()
        .then((cart) => {
            // console.log(cart);
            return cart
                .getProducts()
                .then((products) => {
                    res.render('shop/cart', {
                        pageTitle: 'Your Cart',
                        path:'/cart', 
                        products: products
                    });
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
}; 

// add to cart
exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    let fetchedCart;
    req.user
        .getCart()
        .then((cart) => {
            fetchedCart = cart;
            // return product by id
            return cart.getProducts({where: {id: prodId}});
        })
        .then((products) => {
            let product;
            
            if (products.length > 0) {
                // retrieve single product
                product = products[0];
            }
            let newQuantity = 1;
            if(product) {
                // ...
            }
            return Product.findByPk(prodId)
                .then((product) => {
                    return fetchedCart.addProduct(product, {
                        through: {quantity: newQuantity}
                    });
                })
                .catch((err) => console.log(err));
        })
        .then(() => {
            res.redirect('/cart');
        })
        .catch((err) => console.log(err));
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
