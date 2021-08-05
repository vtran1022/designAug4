const router = require('express').Router();
const { getDogs, postDog } = require('./controller.js');

router.get('/dogs', getDogs);

router.post('/dogs', postDog);

module.exports = router;
