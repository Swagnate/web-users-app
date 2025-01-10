const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const sectionRoutes = require('./sectionRoutes');

// маршрут для главной страницы
router.get('/', (req, res) => {
    res.render('index')   // отправляем рендеринг шаблона "index" в ответ на GET запрос
});

// Маршруты для пользователей и секций
router.use('/users', userRoutes);
router.use('/sections', sectionRoutes);

module.exports = router;
