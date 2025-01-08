const express = require('express');
const router = express.Router();
const sectionController = require('../controllers/sectionController')
router.get('/', sectionController.getSections);
router.post('/', sectionController.createSection);
router.post('/add-user', sectionController.addUserToSection)
module.exports = router;
