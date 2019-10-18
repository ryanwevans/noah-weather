import React from 'react';

function CurrentWeather() {
    return (
        <div className="currentWeatherWrapper currentWeatherBackgroundImage">
        <div className="currentTemp">
          57&#176;f
        </div>
        <div className="currentWeather">
          <span className="currentWeatherDescription">Rain</span><br/>
          <span>Wind: 18mph</span><br/>
          <span>Feels Like: 48&#176;f</span>
        </div>
      </div>
    );
}

export default CurrentWeather;