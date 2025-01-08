
const sequelize = require('sequelize')
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const Section = sequelize.define('Section', {
        title: {
            type: DataTypes.STRING,
            allowNull: false

        }
    });
    return Section;
};