const express = require('express');
const router = express.Router();
const cardioController = require('../Controller/CardioController');
const validateToken = require('../middleware/validateTokenHandler'); // Import JWT middleware

// Apply validateToken middleware to all routes
router.post('/add', validateToken, cardioController.addCardio);
router.get('/user/:userId', validateToken, cardioController.getCardiosByUser);
router.delete('/:id', validateToken, cardioController.deleteCardio);

module.exports = router;
