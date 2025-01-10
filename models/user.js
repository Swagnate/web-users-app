
const sequelize = require('sequelize')
const { DataTypes } = require('sequelize')

// Экспортируем функцию, которая принимает экземпляр Sequelize
module.exports = (sequelize) => {
    // Определяем модель 'User'
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING, // Указываем, что поле 'name' будет строкой
            allowNull: false // Указываем, что поле 'name' не может быть пустым (обязательное поле)

        }
    });
    return User;  // Возвращаем определенную модель
};
