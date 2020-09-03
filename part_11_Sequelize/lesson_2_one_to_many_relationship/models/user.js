// import sequelize
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// create user table
const User = Sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = User;
