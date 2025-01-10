const { Sequelize } = require('sequelize');
const UserModel = require('./user');
const SectionModel = require('./section');

// Создаем экземпляр Sequelize для работы с базой данных SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false
})

// Инициализируем модели
const User = UserModel(sequelize) //  создаем модель пользователя
const Section = SectionModel(sequelize) // создаем модель секции

// Определяем связи между моделями
User.belongsToMany(Section, { through: 'user_sections' })  // Связь m2m между пользователями и секциями через таблицу 'user_sections'
Section.belongsToMany(User, { through: 'user_sections' })  // Связь m2m между секциями и пользователями через таблицу 'user_sections'

// Экспортируем экземпляр Sequelize и модели для использования в других частях приложения
module.exports = {
    sequelize,
    User,
    Section
}
