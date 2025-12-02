const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.getAllContacts);
router.post('/', contactController.createContact);
router.put('/:id/read', contactController.markAsRead);
router.delete('/:id', contactController.deleteContact);

module.exports = router;
