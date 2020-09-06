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

    save() {

    }
}
// define product model
const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageURL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Product;
