// import file system and path
const fs = require('fs');
const path = require('path');

// name and location file
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {
    // add new product into cart
    static addProduct(id, productPrice) {
        // fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 }
            // if cart.json existed, then convert json to object js
            if(!err) {
                // get data from file and convert to objet
                cart = JSON.parse(fileContent);
            }

            // analyze the cart => find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            // add new product / increase quantity
            if(existingProduct) {
                // get current product object and store it into update product
                updatedProduct = {...existingProduct}
                updatedProduct.qty = updatedProduct.qty + 1;
                // get old products array of cart and store update product into cart
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                // add new product object into cart
                updatedProduct = {id: id, qty: 1};
                // get old product and add new product into products array of cart
                cart.products = [...cart.products, updatedProduct];
            }

            // update total price of cart
            cart.totalPrice = cart.totalPrice + +productPrice;
            // write cart into json file
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }

    // delete product in cart
    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return;
            }
            // get convert file content to object
            const updatedCart = {...JSON.parse(fileContent)};
            // find product by id and get quantity
            const product = updatedCart.products.find(prod => prod.id === id);
            
            if(!product) {
                return;
            }
            
            const productQty = product.qty;
            // keep all products except prod.id equal id and update total price
            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;
            // write to json file
            fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
                console.log(err);
            });
        });
    }

    // get cart
    static getCart(cb) {
        fs.readFile(p, (err, fileContent) => {
            const cart = JSON.parse(fileContent);
            if(err) {
                cb(null);
            } else {
                cb(cart);
            }
        });
    }
};
