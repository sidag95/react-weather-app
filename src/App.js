import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherCard from "./WeatherCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Siddhant Agarwal</header>
        <WeatherCard weatherType = "Sunny" />
      </div>
    );
  }
}

export default App;
