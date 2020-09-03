// import product, order model
const Product = require('../models/product');
const Order = require('../models/order');

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
    let newQuantity = 1;

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
            // adding existing product and update quantity in the cart
            if(product) {
                const oldQuantity = product.cartItem.quantity;
                newQuantity = oldQuantity + 1;
                return product;
            }
            // find product by id and return it
            return Product.findByPk(prodId)
        })
        .then((product) => {
            // add new product or update quantity
            return fetchedCart.addProduct(product, {
                through: {quantity: newQuantity}
            });
        })
        .then(() => {
            res.redirect('/cart');
        })
        .catch((err) => console.log(err));
};

// cart delete product
exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user
        .getCart()
        .then((cart) => {
            return cart.getProducts({where: {id: prodId}});
        })
        .then((products) => {
            const product = products[0];
            return product.cartItem.destroy();
        })
        .then((result) => {
            res.redirect('/cart');
        })
        .catch((err) => console.log(err));
};

// post order
exports.postOrder = (req, res, next) => {
    let fetchedCart;
    req.user
        .getCart()
        .then((cart) => {
            fetchedCart = cart;
            return cart.getProducts();
        })
        .then((products) => {
            return req.user
                .createOrder()
                .then((order) => {
                    return order.addProducts(
                        products.map((product) => {
                            product.orderItem = {quantity: product.cartItem.quantity};
                            return product;
                        })
                    );
                })
                .catch((err) => console.log(err));;
        })
        .then((result) => {
            // clear all data of cart item table
            return fetchedCart.setProducts(null);
        })
        .then((result) => {
            res.redirect('/orders');
        })
        .catch((err) => console.log(err));
}

// get orders
exports.getOrders = (req, res, next) => {
    req.user
        // fetch products table
        .getOrders({include: ['products']})
        .then((orders) => {
            res.render('shop/orders', {
                pageTitle: 'Your Order',
                path: '/orders',
                orders: orders
            });
        })
        .catch((err) => console.log(err));
}
