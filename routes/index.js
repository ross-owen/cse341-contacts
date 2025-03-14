const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('hello world');
})

router.use('/contacts', require('./contacts'));
router.use('/api-docs', require('./api-docs'));

module.exports = router;