import React, { Component } from 'react';

class FutureWeather extends Component {
  render() {
    // Destucture for readability and DRY
    const { 
      temperatureHigh,
      temperatureLow, 
      summary, 
      precipProbability, 
      // Improvement opportunity: add windBearing as windDirection; windBearing is the direction that the wind is coming from in degrees, with true north at 0° and progressing clockwise.
      windSpeed, 
      windGust,
      icon
    } = this.props.dailyForecast;

    // Logging for reviewing available information to possibly enhance weather info displayed
    console.log(this.props && this.props.dailyForecast.precipProbability)
    const time = Math.floor(Date.now() / 1000)
    console.log(time)
    
    // Round data from two decimal places to whole numbers for display
    const roundedTempHigh = Math.round(temperatureHigh);
    const roundedTempLow = Math.round(temperatureLow);
    const roundedPrecipProbability = Math.round(precipProbability);
    const roundedWindSpeed = Math.round(windSpeed)
    const roundedWindGust = Math.round(windGust)
    
    const imageUrl = icon && require(`../images/${icon}.jpg`)

    return (
      <div className="futureWeatherWrapper futureWeatherBackgroundImage"
      // Improvement Opportunity: replace this inline style with a passed variable/attr to css
      style={{ backgroundImage: `url(${imageUrl})` }} >

          <div className="futureWeatherDescriptionContainer">
            <div className="futureWeatherDescription">
              {summary}
            </div>
          </div>

          <div className="futureWeatherHighLowDetailsContainer">
            <div className="futureWeatherHigh">
              <span>High: <br/>{temperatureHigh && roundedTempHigh} &#176;f</span><br/>
            </div>

            <div className="futureWeatherLow">
              <span>Low: <br/>{temperatureLow && roundedTempLow} &#176;f</span><br/>
            </div>

            <div className="futureWeatherDetails">
              <span>Wind: {windSpeed && roundedWindSpeed} mph</span><br/>
              <span>Gusts: {windGust && roundedWindGust} mph</span><br/>
              <span>Rain: {precipProbability && roundedPrecipProbability}%</span>
            </div>
          </div>
    </div>
    );
  }
}

export default FutureWeather;