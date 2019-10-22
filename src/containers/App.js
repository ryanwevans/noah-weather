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
    console.log(this.props.dailySummary)
    return (
      <div className="App">
        <nav>Noah</nav>
        <header className="App-header">
          <LocationSearch />
        </header>
          <CurrentWeather currentWeather={this.props.weather} summary={this.props.dailySummary} />
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

export default connect(mapStateToProps, {getWeather})(App);
