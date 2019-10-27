export default function getWeather() {
    
    // const latitude = navigator.geolocation.getCurrentPosition( position => {
    //     position.coords.latitude.toFixed(6);
    //   })
    
    const API_URL = process.env.REACT_APP_DARK_SKY_API_URL
    const API_KEY = process.env.REACT_APP_DARK_SKY_API_KEY

    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = `${API_URL}${API_KEY}/48.764517,-122.419848`
    
    // const Fetch_API = API_URL + API_KEY + coords

    return dispatch => {
        dispatch( {type: 'LOADING_WEATHER'} )
        return fetch(proxyurl + url)
        .then(res => res.json())
        .then(weatherData => dispatch( {type: 'FETCH_WEATHER', payload: weatherData} ))
        // .catch(error => console.log(error))
    }
}
