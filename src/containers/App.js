import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import LocationSummary from '../LocationSummary';
import CurrentWeather from '../components/CurrentWeather';
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
    console.log(this.props && this.props.dailyForecast)
    return (
      <div className="App">
        <nav className="title">Noah</nav>
        <header className="app-header-footer">
          { this.props.dailySummary ? 
            <LocationSummary loading={this.props.loading} summary={this.props.dailySummary} /> :
            'Fetching Your Local Weather...'
          }
          
        </header>
        <div className="currentWeatherContainer">
          <CurrentWeather currentWeather={this.props.weather} />
        </div>
        <div className="app-header-footer"></div>
        <div className="app-header-footer futureWeatherHeader">
          <span>tomorrow's weather</span>
        </div>
        <div className="futureWeatherContainer">
          <FutureWeather dailyForecast={this.props.dailyForecast} />
        </div>
        <div className="app-header-footer">
          <span className="footer-attribute">Powered by Dark Sky</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    loading: state.weather.loading,
    weather: state.weather.currentWeather,
    dailySummary: state.weather.dailySummary,
    dailyForecast: state.weather.dailyForecast
  })
}

export default (connect(mapStateToProps, {getWeather} ))(App);
