import * as React from "react";
import "./WeatherCard.css"
import WeatherCardBody from "./WeatherCardBody";
import ClockContext from "./ClockContext";

const weatherToClassMap = {
  Sunny: "sunny",
  Rainy: "rainy",
  Overcast: "overcast",
  Cloudy: "cloudy"
}

function WeatherCard(props) {
  const {day, weather, showFullScreen, onClick, onClose} = props;
  return (
    <ClockContext.Consumer>
      {({currentDay, currentTime}) => (
          <div 
            className= {`card ${weatherToClassMap[weather]} ${day === currentDay ? "active" : ""} ${showFullScreen ? "fullScreen" : ""}`} 
            onClick = {_ => onClick ? onClick({day, weather}) : null}
          >
            <div>{currentTime.toLocaleTimeString()}</div>
            <WeatherCardBody day={day} weather={weather} onClose={onClose} renderError />
          </div>
        )
      }
    </ClockContext.Consumer>
  );
}

export default WeatherCard;