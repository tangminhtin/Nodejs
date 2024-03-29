// import sequelize
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// define cart model
const Cart = sequelize.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = Cart;
