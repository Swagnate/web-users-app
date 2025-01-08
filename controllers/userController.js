const { User, Section } = require('../models')
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({ include: Section })
        res.render('users', { users })
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при плучении списка пользователя')
    }
}


exports.createUser = async (req, res) => {
    try {
        const { name } = req.body;
        await User.create({ name })
        res.redirect('/users')
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при плучении списка пользователя')
    }
}

