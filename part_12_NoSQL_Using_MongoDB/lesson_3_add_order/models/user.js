// import mongodb
const mongodb = require('mongodb');

// get access database
const getDb = require('../util/database').getDb;

// object id
let ObjectId = mongodb.ObjectId;

// create User class
class User {
    constructor(username, email, _id, cart) {
        this.username = username;
        this.email = email;
        this._id = _id ? new ObjectId(_id) : null;
        this.cart = cart;   // {items: []}
    }

    // insert or update record
    save() {
        // get access database
        let db = getDb();
        let dbOp;
        // if _id exist then update user 
        if (this._id) { 
            dbOp = db.collection('users')
                .updateOne({_id: this._id}, {$set: this});
        } else {
            // otherwise, insert new record
            dbOp = db.collection('users')
                .insertOne(this);
        }
        // return result after insert or update user
        return dbOp
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
    }

    // add product to cart
    addToCart(product) {
        const cartProductIndex = this.cart.items.findIndex(item => {
            return item.productId.toString() === product._id.toString();
        });

        let newQuantity = 1;
        // copy old cart items (product)
        const updatedCartItems = [...this.cart.items];

        // if product existed, then update add quantity by 1
        if (cartProductIndex >= 0) {
            newQuantity = this.cart.items[cartProductIndex].quantity + 1;
            updatedCartItems[cartProductIndex].quantity = newQuantity;
        } else {
            // add new product to cart
            updatedCartItems.push({
                productId: new ObjectId(product._id), 
                quantity: newQuantity
            });
        }

        const updatedCart = {items: updatedCartItems};
        const db = getDb();
        return db.collection('users')
            .updateOne({_id: this._id}, {$set: {cart: updatedCart}})
            .then((result) => console.log(result))
            .catch((err) => console.log(err));

    }

    // find user by id
    static findById(userId) {
        // get access database
        let db = getDb();
        // return result after search by id
        return db
            .collection('users')
            .findOne({_id: new ObjectId(userId)})
            .then((user) => {
                console.log(user)
                return user;
            })
            .catch((err) => console.log(err));
    }

    // fetch all user
    static fetchAll() {
        // get access database
        const db = getDb();
        // return result after fetch all user
        return db.collection('users')
            .find()
            .toArray()
            .then((users) => users)
            .catch((err) => console.log(err));
    }

    // delete user by id
    static deleteById(userId) {
        // get access database
        let db = getDb();
        // return result after delete by id
        return db
            .collection('users')
            .deleteOne({_id: new ObjectId(userId)})
            .then((user) => console.log(user))
            .catch((err) => console.log(err));
    }

    // get cart
    getCart() {
        // get access database
        const db = getDb();
        // get all id of product in cart
        const productIds = this.cart.items.map(i => {
            return i.productId;
        });
        return db.collection('products')
            .find({_id: {$in: productIds}})
            .toArray()
            .then(products => {
                return products.map(p => {
                    return {
                        ...p,
                        quantity: this.cart.items.find(i => {
                            return i.productId.toString() === p._id.toString();
                        }).quantity
                    };
                });
            });
    }

    // delete item in cart
    deleteItemFromCart(productId) {
        // keep all product except product will delete
        const updatedCartItems = this.cart.items.filter(item => {
            return item.productId.toString() !== productId.toString();
        });
        // get access database
        const db = getDb();
        // update cart  
        return db.collection('users')
            .updateOne(
                {_id: new ObjectId(this._id)},
                {$set: {cart: {items: updatedCartItems}}}
            );
    }

    // add order
    addOrder() {
        // get access database
        const db = getDb();
        return this.getCart()
            .then(products => {
                const order = {
                    items: products,
                    user: {
                        _id: new ObjectId(this._id),
                        name: this.username
                    }
                };
                // add orders
                return db.collection('orders')
                    .insertOne(order);
            })
            .then(result => {
                this.cart = {items: []};
                // set cart in users to empty
                return db.collection('users')
                    .updateOne(
                        {_id: new ObjectId(this._id)},
                        { $set: {cart: {items: []}}}
                    );
            });
    }

    // get order
    getOrders() {
        // get access database
        const db = getDb();
        return db.collection('orders')
            .find({'user._id': new ObjectId(this._id)})
            .toArray();
    }
}

module.exports = User;
