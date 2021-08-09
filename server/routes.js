const router = require('express').Router();
const { getDogs, getADog, postDog, getBreeds } = require('./controller.js');

router.get('/dogs', getDogs);

router.get('/dogs/:name', getADog);

router.post('/dogs', postDog);

router.get('/breeds', getBreeds);

module.exports = router;
