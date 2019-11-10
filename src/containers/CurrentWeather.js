import React, { Component } from 'react';

class CurrentWeather extends Component {

  render() {
    // Destucture for readability and DRY
    const { 
      temperature, 
      summary, 
      apparentTemperature, 
      // Add windBearing as windDirection; windBearing is the direction that the wind is coming from in degrees, with true north at 0° and progressing clockwise.
      windSpeed, 
      windGust,
      icon
    } = this.props.currentWeather;

    // Logging for reviewing available information to possibly enhance weather info displayed
    console.log(this.props && this.props.currentWeather)
    
    // Round data from two decimal places to whole numbers for display
    const roundedTemp = Math.round(temperature);
    const roundedApparentTemp = Math.round(apparentTemperature);
    const roundedWindSpeed = Math.round(windSpeed)
    const roundedWindGust = Math.round(windGust)
    
    // const imageUrl = require(`../images/RainyDay.jpg`)
    const imageUrl = icon && require(`../images/${icon}.jpg`)
    return (
      // Adding '&&' below checks whether variables are defined when page loads; if undefined, will display nothing and then display values when assigned
      <div 
        className="currentWeatherWrapper currentWeatherBackgroundImage"
        style={{ backgroundImage: `url(${imageUrl})` }} 
        >
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