import * as React from "react";
import WeatherCard from "./WeatherCard";
import "./WeatherScreen.css";
import ErrorBoundary from "./ErrorBoundary";
import ClockContext from "./ClockContext";

class WeatherScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      weeklyWeather: [],
      showDayInFull: null
    };
    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  static getDerivedStateFromProps(props, prevState) {
    let updatedState = {...prevState}
    const {data, location} = props
    if (data !== prevState.data) {
      updatedState = {...updatedState, weeklyWeather: props.data}
    }
    if (location && location.search) {
      const day = location.search.split("=")[1]
      if (data) {
        const dayWeather = data.find(item => item.day.toLowerCase() === day.toLowerCase())
        updatedState = {...updatedState, showDayInFull: dayWeather}
      }
    }
    return updatedState
  }

  onClick(dayWeather) {
    this.setState({showDayInFull: dayWeather});
    const {history} = this.props
    history.push(`/weather?day=${dayWeather.day}`);
  }

  onClose() {
    this.setState({showDayInFull: null});
    const {history} = this.props
    history.push("/weather");
  }

  render() {
    const {showDayInFull} = this.state;
    return (
      <ErrorBoundary>
        <ClockContext.Provider>
          <div className="weatherCardWrapper" >
            {showDayInFull ? (
                <WeatherCard 
                  key={`day-${showDayInFull.day}`} 
                  showFullScreen 
                  onClose={this.onClose} 
                  {...showDayInFull}
                />
              )
            :
              this.state.weeklyWeather.map(
                dayWeather => (
                  <WeatherCard 
                    key = {`day-${dayWeather.day}`}
                    {...dayWeather}
                    onClick={this.onClick}
                  />
                )
              )
            }
          </div>
        </ClockContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default WeatherScreen