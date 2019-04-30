const axios = require('axios')

const getClima = async (lat, lng) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`)
    return res.data.main.temp
}

module.exports = {
    getClima
}