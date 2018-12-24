import * as React from "react";
import WeatherCard from "./WeatherCard";
import "./WeatherScreen.css";
import Clock from "./Clock";

const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

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
    this.updateDate = this.updateDate.bind(this);
  }

  updateDate(newDate) {
    this.setState({date: newDate});
  }

  render() {
    const currentDay = dayOfWeek[this.state.date.getDay()];
    return (
      <div>
        <Clock date={this.state.date} updateDate={this.updateDate} />
        <div className="weatherCardWrapper" >
          {this.state.weeklyWeather.map(dayWeather => <WeatherCard key={`day-${dayWeather.day}`} currentDay={currentDay} {...dayWeather} />)}
        </div>
      </div>
    )
  }

}

export default WeatherScreen