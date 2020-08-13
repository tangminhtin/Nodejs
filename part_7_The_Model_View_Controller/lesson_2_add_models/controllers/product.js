// import product model
const Product = require('../models/product');

// get access request of user
exports.getAddProduct = (req, res, next) => {
    // render add-product.pug page and passing pageTitle
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

// get new product from user input
exports.postAddProduct = (req, res, next) => {
    // add new product
    const product = new Product(req.body.title);
    // save product
    product.save();
    res.redirect('/');
};

// get all products
exports.getProducts = (req, res, next) => {
    // fetch all products
    const products = Product.fetchAll();

    // render shop.pug page, passing products data into shop.hbs page
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};
