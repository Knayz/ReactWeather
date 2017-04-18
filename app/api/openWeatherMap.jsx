const axios = require("axios");

const OPEN_WHETHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=376b23ad62bb71acafd53669fad764da&units=metric';

//376b23ad62bb71acafd53669fad764da

module.exports = {
    getTemp: function (location) {
        let encodedLocation = encodeURIComponent(location);
        let requestURL = `${OPEN_WHETHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(
            function (res) {
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return res.data.main.temp;
                }
            },
            function (res) {
                throw new Error(res.data.message);
            }
        );
    }
};