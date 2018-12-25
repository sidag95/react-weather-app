import * as React from "react";
import WeatherCard from "./WeatherCard";
import "./WeatherScreen.css";
import withClock from "./Clock";
import ErrorBoundary from "./ErrorBoundary";

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
    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClick(dayWeather) {
    this.setState({showDayInFull: dayWeather});
  }

  onClose() {
    this.setState({showDayInFull: null});
  }

  render() {
    const WeatherCardWithClock = withClock(WeatherCard);
    const {showDayInFull} = this.state;
    return (
      <ErrorBoundary>
        <div>
          <div className="weatherCardWrapper" >
            {showDayInFull ? 
              <WeatherCardWithClock key={`day-${showDayInFull.day}`} showFullScreen onClose={this.onClose} {...showDayInFull} />
              :
              this.state.weeklyWeather.map(dayWeather => <WeatherCardWithClock key={`day-${dayWeather.day}`} onClick={this.onClick} {...dayWeather} />)
            }
          </div>
        </div>
      </ErrorBoundary>
    )
  }
}

export default WeatherScreen