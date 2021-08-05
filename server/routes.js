const router = require('express').Router();
const { getDogs, addDog } = require('./controller.js');

router.get('/dogs', getDogs);

router.post('/dogs/newdog', addDog);

module.exports = router;
