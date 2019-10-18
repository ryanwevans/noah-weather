import React, { Component } from 'react';
import '../App.css';
import LocationSearch from '../LocationSearch';
import CurrentWeather from '../components/CurrentWeather';
import FutureWeather from '../components/FutureWeather';

class App extends Component {

  render() {
    
    
    return (
      <div className="App">
        <nav>Noah</nav>
        <header className="App-header">
          <LocationSearch />
        </header>
          <CurrentWeather />
          <FutureWeather />
      </div>
    );

  }
}

export default App;
