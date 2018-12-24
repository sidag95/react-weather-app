import * as React from "react";
import WeatherCard from "./WeatherCard";
import "./WeatherScreen.css"

const dummyWeatherData = [
  {
    day: "Sunday",
    weather: "Sunny"
  },
  {
    day: "Monday",
    weather: "Sunny"
  },
  {
    day: "Tuesday",
    weather: "Overcast"
  },
  {
    day: "Wednesday",
    weather: "Cloudy"
  },
  {
    day: "Thrusday",
    weather: "Cloudy"
  },
  {
    day: "Friday",
    weather: "Rainy"
  },
  {
    day: "Saturday",
    weather: "Rainy"
  }
]

class WeatherScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      weeklyWeather: dummyWeatherData
    };
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    setInterval(() => {
      this.setState({date: new Date()})
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>Time: {this.state.date.toLocaleTimeString()}</p>
        <div className="weatherCardWrapper" >
          {this.state.weeklyWeather.map(dayWeather => <WeatherCard key={`day-${dayWeather.day}`} {...dayWeather} />)}
        </div>
      </div>
    )
  }

}

export default WeatherScreen