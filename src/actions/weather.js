function getWeather(latitude, longitude) {
    const API_URL = process.env.REACT_APP_DARK_SKY_API_URL
    const API_KEY = process.env.REACT_APP_DARK_SKY_API_KEY
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = `${API_URL}${API_KEY}/${latitude},${longitude}`
    // Hard-coded latitude and longitude values for early testing:
    // const url = `${API_URL}${API_KEY}/48.764517,-122.419848`

    console.log('logging from within getWeather')
    
    return (dispatch) => {
        console.log('logging from within getWeather')
        dispatch( {type: 'LOADING_WEATHER'} )
        return fetch(proxyurl + url)
        .then(res => res.json())
        .then(weatherData => dispatch( {type: 'FETCH_WEATHER', payload: weatherData} ))
        // .catch(error => console.log(error))
    }
}

export default getWeather;


// const geolocate = () => {
//     if (window.navigator && window.navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
//     }
// }


// const onGeolocateSuccess = (coordinates) => {
//     console.log(`${coordinates.coords.latitude}, ${coordinates.coords.longitude}`)
//     return(coordinates.coords.latitude, coordinates.coords.longitude)
// }


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


