import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherScreen from "./WeatherScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>My weather app</header>
        <WeatherScreen weatherType = "Sunny" />
      </div>
    );
  }
}

export default App;
