// import file system, path and cart
const fs = require('fs');
const path = require('path');
const Cart = require('./cart');

// name and location of file
const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
);

// read data from file
const getProductsFromFile = cb => {
    // read data from json file
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            cb([]);
        } else {
            // convert json to js
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(id, title, imageURL, price, description) {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
    }

    // save object file
    save() {
        getProductsFromFile(products => {
            if(this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                // converts js to json and write to file
                fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                    console.log(err);
                });
            } else {
                this.id = Math.random().toString();
                // put data into array
                products.push(this);
                // converts js to json and write to file
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }
        });
    }

    // get all data
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    // find product by id
    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }

    // delete product by id
    static deleteById(id) {
        getProductsFromFile(products => {
            // get product
            const product = products.find(prod => prod.id === id);
            // keep all products except prod.id equal id
            const updatedProducts = products.filter(prod => prod.id !== id);
            // store data back to file
            fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                if(!err) {
                    Cart.deleteProduct(id, product.price);
                }
            })
        });
    }
};
