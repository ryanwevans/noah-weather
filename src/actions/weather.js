function getWeather() {
    // let latitude = ''
    // let longitude = ''

    function geolocate() {
        if (window.navigator && window.navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
        }
    }
    
    function onGeolocateSuccess(coordinates) {
        let latitude = coordinates.coords.latitude;
        let longitude = coordinates.coords.longitude;
        console.log(latitude, longitude)
    }

    function onGeolocateError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert('Permission was denied');
                break;
            case error.POSITION_UNAVAILABLE:
                alert('Position is currently unavailable.');
                break;
            case error.PERMISSION_DENIED_TIMEOUT:
                alert('User took to long to grant/deny permission.');
                break;
            case error.UNKNOWN_ERROR:
                alert('An unknown error occurred.')
                break;
            default:
                alert('Something went wrong...')
        }
    }

    geolocate();

    const API_URL = process.env.REACT_APP_DARK_SKY_API_URL
    const API_KEY = process.env.REACT_APP_DARK_SKY_API_KEY
    
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = `${API_URL}${API_KEY}/48.764517,-122.419848`
    // let url = `${API_URL}${API_KEY}/${latitude},${longitude}`
    
    return dispatch => {
        dispatch( {type: 'LOADING_WEATHER'} )
        return fetch(proxyurl + url)
        .then(res => res.json())
        .then(weatherData => dispatch( {type: 'FETCH_WEATHER', payload: weatherData} ))
        // .catch(error => console.log(error))
    }
}

export default getWeather;