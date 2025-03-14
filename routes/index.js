const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('hello world');
})

router.use('/contacts', require('./contacts'));
router.use('/swagger', require('./swagger'));

module.exports = router;