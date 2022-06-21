const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv.length > 2 ? process.argv[2] : 'No location entered!';

if(location === 'No location entered!') {
    console.log(location);
} else {
    geocode(location, (error, { longitude, latitude, location } = {}) => {
        if(error) {
            return console.log(error);
        }
        forecast(longitude, latitude, (error, forecastData) => {
            if(error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        })
    });
}
