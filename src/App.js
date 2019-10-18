import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>Noah</nav>
      <header className="App-header">
        <div>
          <form className="formZipCode">Search Zip Code</form>
        </div>
      </header>
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
      <div className="futureForecastWrapper">
        <div className="futureForecast">
          <span>Tomorrow&nbsp;</span>
          <span>Day&nbsp;After</span>
          <span>Third&nbsp;Day</span>
          <span>Fourth&nbsp;Day</span>
          <span>Fifth&nbsp;Day</span>
        </div>
      </div>
    </div>
  );
}

export default App;
