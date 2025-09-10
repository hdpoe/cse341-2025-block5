const express = require('express');
const router = express.Router();
const contacts = require('../controllers/contacts');

router.get('/', contacts.getContacts);
router.post('/', contacts.createContact);

module.exports = router;
