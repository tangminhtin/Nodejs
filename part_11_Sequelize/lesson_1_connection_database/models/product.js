// import cart and mysql
const Cart = require('./cart');
const db = require('../util/database');

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
        return db.execute(
            'INSERT INTO products (title, price, imageURL, description) VALUES (?, ?, ?, ?)',
             [this.title, this.price, this.imageURL, this.description]
        );
    }

    // delete product by id
    static deleteById(id) {
        
    }

    // get all data
    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    // find product by id
    static findById(id, cb) {
        return db.execute('SELECT * FROM products WHERE products.id=?', [id]);
    }
};
