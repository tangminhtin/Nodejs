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
    const product = new Product({
        title: title,
        price: price,
        description: description,
        imageURL: imageURL,
        userId: req.user
    });
    
    product
        .save()
        .then((result) => {
            // console.log(result);
            console.log('Created Product!');
            res.redirect('/admin/products');
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

    Product.findById(prodId)
        .then((product) => {
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
        })
        .catch((err) => console.log(err));
};

// edit product
exports.postEditProduct = (req, res, next) => {
    // get id product from body
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedImageURL = req.body.imageURL;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;

    // update product
    Product.findById(prodId)
        .then((product) => {
            product.title = updatedTitle;
            product.price = updatedPrice;
            product.description = updatedDescription;
            product.imageURL = updatedImageURL;
            return product.save();
        })
        .then((result) => {
            // console.log(result);
            console.log('Updated Success!');
            res.redirect('/admin/products');
        })
        .catch((err) => console.log(err));
}

// get products
exports.getProducts = (req, res, next) => {
    // fetch all products
    Product.find()
        .then((products) => {
            res.render('admin/products', {
                prods: products, 
                pageTitle: 'Admin Products', 
                path: '/admin/products'
            });
        })
        .catch((err) => console.log(err));
};

// delete product
exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    // delete product
    Product.findByIdAndRemove(prodId)
        .then(() => {
            console.log('Delete Product');
            res.redirect('/admin/products');
        })
        .catch((err) => console.log(err));
};
