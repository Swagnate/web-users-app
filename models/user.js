
const sequelize = require('sequelize')
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false

        }
    });
    return User;
};