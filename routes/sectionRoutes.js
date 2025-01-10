const express = require('express');
const router = express.Router();
const sectionController = require('../controllers/sectionController');

// Определяем  маршрут для получения всех секций
router.get('/', sectionController.getSections);

// Определяем маршрут для создания новой секции
router.post('/', sectionController.createSection);

// Определяем маршрут для добавления пользователя в секцию
router.post('/add-user', sectionController.addUserToSection);

module.exports = router;
