
const sequelize = require('sequelize')
const { DataTypes } = require('sequelize')

// Экспортируем функцию, которая принимает экземпляр Sequelize
module.exports = (sequelize) => {
    // Определяем модель 'Section'
    const Section = sequelize.define('Section', {
        title: {
            type: DataTypes.STRING, // Указываем, что поле 'title' будет строкой
            allowNull: false  // Указываем, что поле 'title' не может быть пустым

        }
    });
    return Section; // Возвращаем определенную модель
};
