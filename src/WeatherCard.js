import * as React from "react";
import "./WeatherCard.css";
import WeatherCardBody from "./WeatherCardBody";

const weatherToClassMap = {
  Sunny: "sunny",
  Rainy: "rainy",
  Overcast: "overcast",
  Cloudy: "cloudy"
}

function WeatherCard(props) {
  const {day, weather, currentDay, showFullScreen, onClick, onClose} = props;
  console.log(showFullScreen)
  const isCurrentDay = day === currentDay;
  return (
    <div 
      className={`card ${weatherToClassMap[weather]} ${isCurrentDay ? "active" : ""} ${showFullScreen ? "fullScreen" : ""}`}
      onClick = {_ => onClick ? onClick({day, weather}) : null}
    >
      <WeatherCardBody day={day} weather={weather} onClose={onClose} />
    </div>
  )
}

export default WeatherCard