// import file system and path
const fs = require('fs');
const path = require('path');

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
    constructor(title, imageURL, price, description) {
        this.title = title;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
    }

    // save object file
    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            // put data into array
            products.push(this);

            // converts js to json and write to file
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
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
};
