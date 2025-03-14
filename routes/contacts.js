const express = require('express');
const router = express.Router();

const controller = require('../controllers/contacts');

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.updateById);
router.delete('/:id', controller.deleteById);

module.exports = router;