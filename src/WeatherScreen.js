import * as React from "react";
import WeatherCard from "./WeatherCard";
import "./WeatherScreen.css";
import Clock from "./Clock";
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
    const {showDayInFull} = this.state;
    return (
      <ErrorBoundary>
        <div>
          <div className="weatherCardWrapper" >
            {showDayInFull ? (
              <Clock>
                {({currentTime, currentDay}) => (
                  <WeatherCard 
                    key={`day-${showDayInFull.day}`} 
                    showFullScreen onClose={this.onClose} 
                    {...showDayInFull} 
                    currentDay={currentDay}
                    currentTime={currentTime}
                  />
                )}
              </Clock>
            )
              :
              this.state.weeklyWeather.map(dayWeather => (
                <Clock key={`day-${dayWeather.day}`} >
                  {({currentTime, currentDay}) => (
                    <WeatherCard 
                      onClick={this.onClick} 
                      {...dayWeather} 
                      currentDay={currentDay}
                      currentTime={currentTime}
                    />
                  )}
                </Clock>
              ))
            }
          </div>
        </div>
      </ErrorBoundary>
    )
  }
}

export default WeatherScreen