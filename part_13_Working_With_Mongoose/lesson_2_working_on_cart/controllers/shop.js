// import product, order model
const Product = require('../models/product');
// const Order = require('../models/order');

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


    // let fetchedCart;
    // let newQuantity = 1;

    // req.user
    //     .getCart()
    //     .then((cart) => {
    //         fetchedCart = cart;
    //         // return product by id
    //         return cart.getProducts({where: {id: prodId}});
    //     })
    //     .then((products) => {
    //         let product;
    //         if (products.length > 0) {
    //             // retrieve single product
    //             product = products[0];
    //         }
    //         // adding existing product and update quantity in the cart
    //         if(product) {
    //             const oldQuantity = product.cartItem.quantity;
    //             newQuantity = oldQuantity + 1;
    //             return product;
    //         }
    //         // find product by id and return it
    //         return Product.findByPk(prodId)
    //     })
    //     .then((product) => {
    //         // add new product or update quantity
    //         return fetchedCart.addProduct(product, {
    //             through: {quantity: newQuantity}
    //         });
    //     })
    //     .then(() => {
    //         res.redirect('/cart');
    //     })
    //     .catch((err) => console.log(err));
};

// cart delete product
exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user
        .deleteItemFromCart(prodId)
        .then((result) => {
            res.redirect('/cart');
        })
        .catch((err) => console.log(err));
};

// post order
exports.postOrder = (req, res, next) => {
    let fetchedCart;
    req.user
        .addOrder()
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
