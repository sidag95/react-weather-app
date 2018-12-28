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
  const {day, weather, showFullScreen, onClick, onClose, low, high} = props;
  return (
    <ClockContext.Consumer>
      {({currentDay}) => (
        <div 
          className= {`card ${weatherToClassMap[weather]} ${day === currentDay ? "active" : ""} ${showFullScreen ? "fullScreen" : ""}`} 
          onClick = {_ => onClick ? onClick({day, weather}) : null}
        >
          <WeatherCardBody day={day} weather={weather} onClose={onClose} low={showFullScreen ? low : ""} high={showFullScreen ? high : ""} renderError />
        </div>
      )}
    </ClockContext.Consumer>
  );
}

export default WeatherCard;