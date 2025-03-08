const express = require('express');
const router = express.Router();

const controller = require('../controllers/contacts');

router.get('/', controller.list);
router.get('/:id', controller.getById);

module.exports = router;