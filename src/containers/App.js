import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import LocationSearch from '../LocationSearch';
import CurrentWeather from '../components/CurrentWeather';
import FutureWeather from '../components/FutureWeather';

import getWeather from '../actions/weather'

class App extends Component {

  componentDidMount() {
    this.props.getWeather()
  }
  
  
  render() {
    console.log(this.props.weather)
    return (
      <div className="App">
        <nav>Noah</nav>
        <header className="App-header">
          <LocationSearch />
        </header>
          <CurrentWeather currentWeather={this.props.weather} />
          <FutureWeather />
      </div>
    );

  }
}

const mapStateToProps = state => {
  return({
    weather: state.weather.weather
  })
}

export default connect(mapStateToProps, {getWeather})(App);
