const { Sequelize } = require('sequelize');
const UserModel = require('./user');
const SectionModel = require('./section');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false
})

const User = UserModel(sequelize)
const Section = SectionModel(sequelize)

User.belongsToMany(Section, { through: 'user_sections' })
Section.belongsToMany(User, { through: 'user_sections' })

module.exports = {
    sequelize,
    User,
    Section
}