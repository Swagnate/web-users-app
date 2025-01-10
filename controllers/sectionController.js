const { User, Section } = require('../models');

// Получение всех секций с пользователями
exports.getSections = async (req, res) => {
    try {
        // Находим все секции и включаем связанные с ними пользователей
        const sections = await Section.findAll({ include: User });
        // Рендерим шаблон 'sections' и передаем в него данные о секциях
        res.render('sections', { sections });
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при получении списка секций.');
    }
};

// Создание новой секции
exports.createSection = async (req, res) => {
    try {
        const { title } = req.body;      // Извлекаем название секции из тела запроса
        await Section.create({ title }); // Создаем новую секцию с указанным названием
        res.redirect('/sections');       // Перенаправляем на страницу со списком секций
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при создании секции.');
    }
};

// Добавление пользователя в секцию
exports.addUserToSection = async (req, res) => {
    try {
        const { userId, sectionId } = req.body; // Извлекаем userId и sectionId из тела запроса

        // Находим пользователя и секцию по id
        const user = await User.findByPk(userId);
        const section = await Section.findByPk(sectionId);
        console.log('userId:', userId, 'sectionId:', sectionId); // Лог id пользователя и секции
        console.log('user:', user, 'section:', section); // лог найденого юзера и секции

        // Проверяем, существуют ли пользователь и секция
        if (!user || !section) {
            return res.status(404).send('Пользователь или секция не найдены.');
        }

        // Добавляем пользователя в секцию
        await section.addUser(user);

        res.redirect('/sections'); // Перенаправляем на страницу со списком секций
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при добавлении пользователя в секцию.');
    }
};
