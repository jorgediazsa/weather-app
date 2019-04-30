const place = require('./place/place')
const weather = require('./weather/weather')

require('dotenv').config()
const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Address of the city',
        demand: true
    }
}).argv

const getInfo = async address => {
    try {
        const coords = await place.getPlaceLatLong(argv.address)
        const temp = await weather.getClima(coords.lat, coords.lng)
        return `The climate of ${address} is ${temp} degrees celsius`
    } catch(e) {
        console.error(e)
    }
}

getInfo( argv.address )
    .then( console.log )
    .catch( console.log )