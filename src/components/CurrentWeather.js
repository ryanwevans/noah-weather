import React, { Component } from 'react';

class CurrentWeather extends Component {

  render() {
    
    const { 
      temperature, 
      summary, 
      apparentTemperature, 
      windSpeed, 
      windGust 
    } = this.props.currentWeather;
    
    const roundedTemp = Math.round(temperature);
    const roundedApparentTemp = Math.round(apparentTemperature);
    const roundedWindSpeed = Math.round(windSpeed)
    const roundedWindGust = Math.round(windGust)
    
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
}

export default CurrentWeather;