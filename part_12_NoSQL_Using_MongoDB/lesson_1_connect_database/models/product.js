// get access database
const getDb = require('../util/database').getDb;

// class product
class Product {
    constructor(title, price, description, imageURL) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageURL = imageURL;
    }

    // save data
    save() {
        const db = getDb();
        // create or insert one record data into table products
        return db.collection('products')
            .insertOne(this)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => console.log(err));
    }

    // fetch all product
    static fetchAll() {
        const db = getDb();
        return db.collection('products')
            .find()
            .toArray()
            .then((products) => {
                console.log(products);
                return products;
            })
            .catch((err) => console.log(err));
    }
}

module.exports = Product;
