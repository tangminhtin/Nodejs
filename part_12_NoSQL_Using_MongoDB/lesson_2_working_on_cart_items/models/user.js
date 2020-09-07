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
        // const cartProduct = this.cart.items.findIndex(item => {
        //     return item._id === product._id;
        // })

        const db = getDb();
        const updatedCart = {items: [{...product, quantity: 1}]};
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
}

module.exports = User;
