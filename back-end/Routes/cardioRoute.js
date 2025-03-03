const express = require('express');
const router = express.Router();
const cardioController = require('../Controller/CardioController');

router.post('/add', cardioController.addCardio);
router.get('/user/:userId', cardioController.getCardios);
router.delete('/:id', cardioController.deleteCardio);

module.exports = router;
