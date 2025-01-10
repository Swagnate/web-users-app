const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// Определяем маршрут для получения всех пользователей
router.get('/', userController.getUsers);

// Определяем маршрут для создания нового пользователя
router.post('/', userController.createUser);

module.exports = router;
