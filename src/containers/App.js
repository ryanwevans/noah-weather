import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import LocationSummary from '../LocationSummary';
import CurrentWeather from './CurrentWeather';
import FutureWeather from '../components/FutureWeather';

import getWeather from '../actions/weather'


class App extends Component {
  
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(position => {
       let latitude = position.coords.latitude.toFixed(6)
       let longitude = position.coords.longitude.toFixed(6)
       this.props.getWeather(latitude, longitude);
    })
  }
  
  render() {
    return (
      <div className="App">
        <nav>Noah</nav>
        <header className="App-header">
          { this.props.dailySummary ? 
            <LocationSummary loading={this.props.loading} summary={this.props.dailySummary} /> :
            'Fetching Your Local Weather...'
          }
          
        </header>
          <CurrentWeather currentWeather={this.props.weather} />
          <FutureWeather />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    loading: state.weather.loading,
    weather: state.weather.currentWeather,
    dailySummary: state.weather.dailySummary
  })
}

export default (connect(mapStateToProps, {getWeather} ))(App);
