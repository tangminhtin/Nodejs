// import product model
const Product = require('../models/product');

// get access request of user
exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
        editing: false
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
    const product = new Product(null, title, imageURL, price, description);
    // save product
    product
        .save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
};

// get edit product info
exports.getEditProduct = (req, res, next) => {
    // get query params on the URL
    const editMode = req.query.edit;
    // check user want to edit or not
    if(!editMode) {
        return res.redirect('/');
    }
    // get id product on URL
    const prodId = req.params.productId;
    Product.findById(prodId, (product) => {
        if(!product) {
            return res.redirect('/');
        }
        // render edit product
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product', 
            path: '/admin/edit-product',
            editing: editMode,
            product: product        
        });
    });
};

// edit product
exports.postEditProduct = (req, res, next) => {
    // get id product from body
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedImageURL = req.body.imageURL;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;
    const updatedProduct = new Product(
        prodId, 
        updatedTitle, 
        updatedImageURL, 
        updatedPrice, 
        updatedDescription
    );
    updatedProduct.save();
    res.redirect('/admin/products');
}

exports.getProducts = (req, res, next) => {
    // fetch all products
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products, 
            pageTitle: 'Admin Products', 
            path: '/admin/products'
        });
    });
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId);
    res.redirect('/admin/products');
};
