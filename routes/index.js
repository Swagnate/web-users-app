const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const sectionRoutes = require('./sectionRoutes');

router.get('/', (req, res) => {
    res.render('index')
});

router.use('/users', userRoutes);

router.use('/sections', sectionRoutes);
module.exports = router;