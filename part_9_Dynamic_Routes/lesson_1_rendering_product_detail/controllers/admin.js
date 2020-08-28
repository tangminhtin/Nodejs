// import product model
const Product = require('../models/product');

// get access request of user
exports.getAddProduct = (req, res, next) => {
    // render add-product.pug page and passing pageTitle
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

// get new product from user input
exports.postAddProduct = (req, res, next) => {
    // get input data from user
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const price = req.body.price;
    const description = req.body.description;

    // add new product
    const product = new Product(title, imageURL, price, description);
    // save product
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    // fetch all products
    Product.fetchAll(products => {
        // render shop.pug page, passing products data into shop.hbs page
        res.render('admin/products', {
            prods: products, 
            pageTitle: 'Admin Products', 
            path: '/admin/products'
        });
    });
};

