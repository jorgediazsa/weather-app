const axios = require('axios')

const getPlaceLatLong = async address => {
    const encodedAddress = encodeURI(address)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedAddress}`,
        headers: {
            'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY
        }
    })
    
    const res = await instance.get()
    
    if ( res.data.Results.length === 0 ) {
        throw new Error(`No results for ${address}`)
    }

    const data = res.data.Results[0]
    const newAddress = data.name
    const lat = data.lat
    const lng = data.lon

    return {
        address: newAddress,
        lat,
        lng
    }
}

module.exports = {
    getPlaceLatLong
}

