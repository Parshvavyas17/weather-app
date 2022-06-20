const request = require("request");

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f919f71a20db63416b24723fd7f0de8f&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f';

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to the weather app services!', undefined);
        } else if(response.body.error) {
            callback('Unable to find the location!', undefined);
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.'
            )
        }
    })
}

module.exports = forecast