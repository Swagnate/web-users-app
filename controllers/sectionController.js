const { User, Section } = require('../models');


exports.getSections = async (req, res) => {
    try {
        const sections = await Section.findAll({ include: User });
        res.render('sections', { sections });
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при получении списка секций.');
    }
};


exports.createSection = async (req, res) => {
    try {
        const { title } = req.body;
        await Section.create({ title });
        res.redirect('/sections');
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при создании секции.');
    }
};


exports.addUserToSection = async (req, res) => {
    try {

        const { userId, sectionId } = req.body;


        const user = await User.findByPk(userId);
        const section = await Section.findByPk(sectionId);
        console.log('userId:', userId, 'sectionId:', sectionId);
        console.log('user:', user, 'section:', section);

        if (!user || !section) {
            return res.status(404).send('Пользователь или секция не найдены.');
        }

        await section.addUser(user);

        res.redirect('/sections');
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при добавлении пользователя в секцию.');
    }
};
