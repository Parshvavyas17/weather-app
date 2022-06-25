const request = require("request");

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f919f71a20db63416b24723fd7f0de8f&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude);

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to the weather app services!', undefined);
        } else if(body.error) {
            callback('Unable to find the location!', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. ' + 'The humidity and wind speed is ' + body.current.humidity + '% and ' + body.current.wind_speed + 'mph respectively.'
            );
        }
    });
}

module.exports = forecast;