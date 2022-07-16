const requests = require('requests');
const constants = require('../config');

const weatherData = (address, callback) => {
    const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&cnt='+ constants.openWeatherMap.COUNT + '&id=' + constants.openWeatherMap.ID +'&appid=' + constants.openWeatherMap.API_KEY;
    console.log(url);

    requests(url)
    .on('data', (chunk) => {
        const objData = JSON.parse(chunk);
        console.log(objData.list);
        console.log(objData.city);
        if( !objData.city) {
            callback('Unable to find required data. Please try another location.', undefined);
        }
        else {
            callback(undefined, {
                temperature: objData.list.map(d => d.main.temp),
                description: objData.list.map(d => d.weather[0].description),
                logo: objData.list.map(d => d.weather[0].main),
                cityName: objData.city.name,
                country: objData.city.country,
                feelsLike: objData.list.map(d => d.main.feels_like),
                time: objData.list.map(d => d.dt_txt)
            })
        }
    })
    .on('end', (err) => {
        if(err) callback("Can't fetch the data from open weather map api", err);
    });
        
}
module.exports = weatherData;