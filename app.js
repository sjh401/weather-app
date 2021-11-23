//  api key 	X0ENHpz7ZFfzMNEalSPRqR11Vo9fsGUz
// api get http://dataservice.accuweather.com/locations/v1/cities/geoposition/search


const { default: axios } = require("axios")

const getWeather = async(location) => {
    try {
        const url = `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${API_KEY}&q=${location}`
        const res = await axios.get(url)
        console.log(res)
    } catch (e) {
        throw e
    }
}
getWeather(60660)