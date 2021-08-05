const router = require('express').Router();
const { getDogs, getADog, postDog } = require('./controller.js');

router.get('/dogs', getDogs);

router.get('/dogs/:name', getADog);

router.post('/dogs', postDog);

module.exports = router;
