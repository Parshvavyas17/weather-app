const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=f919f71a20db63416b24723fd7f0de8f&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})
