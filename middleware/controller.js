const fetch = require('node-fetch');
const controller = {};

controller.getWeather = (req, res, next) => {
    fetch('http://api.weatherapi.com/v1/current.json?key=2c2e062200224adfa1243717221307&q=New York&aqi=yes')
        .then(data => data.json())
        .then(data => {
            // console.log('Success:', data);
            res.locals.weather = data;
            // console.log('res locals test:', res.locals.weather)
            return next();
        })
        .catch((error) => {
            console.error('Error:', error);
        })
};

module.exports = controller;