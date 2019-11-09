import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import LocationSearch from '../LocationSearch';
import CurrentWeather from './CurrentWeather';
import FutureWeather from '../components/FutureWeather';

import getWeather from '../actions/weather'


class App extends Component {
  
  componentDidMount = () => {
    let latitude
    let longitude
    navigator.geolocation.getCurrentPosition(position => {
       latitude = position.coords.latitude.toFixed(6)
       longitude = position.coords.longitude.toFixed(6)
       this.props.getWeather(latitude, longitude);
    })
    console.log(latitude)
    
    // this.props.getWeather();
  }
  
  render() {
    return (
      <div className="App">
        <nav>Noah</nav>
        <header className="App-header">
          <LocationSearch summary={this.props.dailySummary} />
        </header>
          <CurrentWeather currentWeather={this.props.weather} />
          <FutureWeather />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    weather: state.weather.currentWeather,
    dailySummary: state.weather.dailySummary
  })
}

export default (connect(mapStateToProps, {getWeather} ))(App);
