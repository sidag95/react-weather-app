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
      weeklyWeather: dummyWeatherData,
      showDayInFull: null
    };
    this.updateDate = this.updateDate.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  updateDate(newDate) {
    this.setState({date: newDate});
  }

  onClick(dayWeather) {
    this.setState({showDayInFull: dayWeather});
  }

  onClose() {
    this.setState({showDayInFull: null});
  }

  render() {
    const currentDay = dayOfWeek[this.state.date.getDay()];
    const {showDayInFull} = this.state;
    return (
      <div>
        <Clock date={this.state.date} updateDate={this.updateDate} />
        <div className="weatherCardWrapper" >
          {showDayInFull ? 
            <WeatherCard key={`day-${showDayInFull.day}`} currentDay={currentDay} showFullScreen onClose={this.onClose} {...showDayInFull} />
            :
            this.state.weeklyWeather.map(dayWeather => <WeatherCard key={`day-${dayWeather.day}`} currentDay={currentDay} onClick={this.onClick} {...dayWeather} />)
          }
        </div>
      </div>
    )
  }

}

export default WeatherScreen