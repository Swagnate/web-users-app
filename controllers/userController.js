const { User, Section } = require('../models')

// Получение всех пользователей с секциями
exports.getUsers = async (req, res) => {
    try {
        // Находим всех пользователей и включаем связанные с ними секции
        const users = await User.findAll({ include: Section })
        // Рендерим шаблон 'users' и передаем в него данные о пользователях
        res.render('users', { users })
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при плучении списка пользователя')
    }
}

// Создание нового пользователя
exports.createUser = async (req, res) => {
    try {
        const { name } = req.body;  // Извлекаем имя пользователя из тела запроса
        await User.create({ name }) // Создаем нового пользователя с указанным именем
        res.redirect('/users')      // Перенаправляем на страницу со списком пользователей
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при плучении списка пользователя')
    }
}
