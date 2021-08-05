const router = require('express').Router();
const { getDogs, postDog } = require('./controller.js');

router.get('/dogs', getDogs);

router.post('/dogs/newdog', postDog);

module.exports = router;
