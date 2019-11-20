function getWeather(latitude, longitude) {
    const API_URL = process.env.REACT_APP_DARK_SKY_API_URL
    const API_KEY = process.env.REACT_APP_DARK_SKY_API_KEY
    // const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = `${API_URL}${API_KEY}/${latitude},${longitude}`

    // Hard-coded latitude and longitude values for testing:
    // const url = `${API_URL}${API_KEY}/48.764517,-122.419848`

    return (dispatch) => {
        dispatch( {type: 'LOADING_WEATHER'} )
        return fetch(url)
        .then(res => res.json())
        .then(weatherData => dispatch( {type: 'FETCH_WEATHER', payload: weatherData} ))
        .catch(error => console.log(error))
    }
}

export default getWeather;

// const onGeolocateError = (error) => {
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             alert('Permission was denied');
//             break;
//         case error.POSITION_UNAVAILABLE:
//             alert('Position is currently unavailable.');
//             break;
//         case error.PERMISSION_DENIED_TIMEOUT:
//             alert('User took to long to grant/deny permission.');
//             break;
//         case error.UNKNOWN_ERROR:
//             alert('An unknown error occurred.')
//             break;
//         default:
//             alert('Something went wrong...')
//     }
// }


