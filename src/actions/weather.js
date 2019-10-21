export default function getWeather() {

    // const API_URL = process.env.DARK_SKY_API_URL
    // const API_KEY = process.env.DARK_SKY_API_KEY

    // const Fetch_API = API_URL + '/' + API_KEY + '/' + latitude + ',' + longitude
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://api.darksky.net/forecast/7bad7a6da40f4bf9483d66ab0e9930fc/48.764517,-122.419848'

    return dispatch => {
        dispatch( {type: 'LOADING_WEATHER'} )
        return fetch(proxyurl + url)
        .then(res => res.json())
        .then(weatherData => console.log(weatherData)
            // dispatch( {type: 'FETCH_WEATHER', payload: weatherData} ))
        // .catch(error => console.log(error))
        )}
}
