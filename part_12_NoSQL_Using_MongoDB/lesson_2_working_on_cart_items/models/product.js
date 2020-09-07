// import mongodb
const mongodb = require('mongodb');

// get access database
const getDb = require('../util/database').getDb;

// class product
class Product {
    constructor(title, price, description, imageURL, _id, userId) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageURL = imageURL;
        this._id = _id ? new mongodb.ObjectID(_id) : null;
        this.userId = userId;
    }

    // save data
    save() {
        const db = getDb();
        let dbOperator;

        // if _id exist then update product
        if(this._id) {
            dbOperator = db.collection('products')
                .updateOne({_id: this._id}, {$set: this});
        } else {
            // insert one record data into table products
            dbOperator = db.collection('products')
                .insertOne(this);
        }
        // return result
        return dbOperator
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
                // console.log(products);
                return products;
            })
            .catch((err) => console.log(err));
    }

    // find By Id
    static findById(prodId) {
        let db = getDb();
        return db.collection('products')
            .find({_id: new mongodb.ObjectID(prodId)})
            .next()
            .then((product) => {
                console.log(product);
                return product;
            })
            .catch((err) => console.log(err));
    }

    // delete by id
    static deleteById(prodId) {
        const db = getDb();
        return db.collection('products')
            .deleteOne({_id: new mongodb.ObjectID(prodId)})
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }
}

module.exports = Product;
