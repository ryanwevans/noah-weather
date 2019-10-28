import React from 'react';
import { usePosition } from 'use-position';
import Geocoder from 'react-native-geocoding';

function CurrentWeather(props) {

  const { latitude, longitude } = usePosition();
  // Add call here to getWeather(lat, long)? in order to load weather data? instead of in componentDidMount in App.js?
  const roundedLatitude = latitude && latitude.toFixed(6)
  const roundedLongitude = longitude && longitude.toFixed(6)
  console.log(roundedLatitude, roundedLongitude)
  


  // Destucture for readability and DRY
  const { 
    temperature, 
    summary, 
    apparentTemperature, 
    windSpeed, 
    windGust 
  } = props.currentWeather;
  
  // Round data from two decimal places to whole numbers for display
  const roundedTemp = Math.round(temperature);
  const roundedApparentTemp = Math.round(apparentTemperature);
  const roundedWindSpeed = Math.round(windSpeed)
  const roundedWindGust = Math.round(windGust)
  
  // Adding '&&' below checks whether variables are defined when page loads; if undefined, will display nothing and then display values when assigned
  return (
    <div className="currentWeatherWrapper currentWeatherBackgroundImage">
      <div className="currentTemp">
        {temperature && roundedTemp} &#176;f
      </div>
      <div className="currentWeather">
        <span className="currentWeatherDescription">{summary}</span><br/>
        <span>Wind: {windSpeed && roundedWindSpeed} mph</span><br/>
        <span>Gusts: {windGust && roundedWindGust} mph</span><br/>
        <span>Feels Like: {apparentTemperature && roundedApparentTemp}&#176;f</span>
      </div>
    </div>
  );
}


export default CurrentWeather;