import * as React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./WeatherScreen.css";
import ErrorBoundary from "../ErrorBoundary";
import ClockContext from "../Clock/ClockContext";

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
          <div className="weatherScreen">
            <div className="weatherScreenClock">
              <ClockContext.Consumer>
                {({currentTime}) => <div>{currentTime.toLocaleTimeString()}</div>}
              </ClockContext.Consumer>
            </div>
            <div className="weatherScreenCards">
              <div className="weatherCardWrapper" >
                {
                  this.state.weeklyWeather.map(
                    dayWeather => (
                      <WeatherCard 
                        key={`day-${dayWeather.day}`}
                        {...dayWeather}
                        onClick={this.onClick}
                      />
                    )
                  )
                }
              </div>
              {
                showDayInFull ? (
                  <WeatherCard 
                    key={`day-${showDayInFull.day}`} 
                    showFullScreen 
                    onClose={this.onClose} 
                    {...showDayInFull} 
                  />
                )
                : null
              }
            </div>
          </div>
        </ClockContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default WeatherScreen