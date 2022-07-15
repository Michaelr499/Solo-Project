const express = require('express');
const controller = require('../middleware/controller.js');
const router = express.Router();

router.get('/', controller.getWeather, (req, res) => {
    // console.log('hi addy')
    return res.status(200).json(res.locals.weather)
});

module.exports = router;
