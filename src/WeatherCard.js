import * as React from "react";
import "./WeatherCard.css";

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
      <div>{day}</div>
      <div>{weather}</div>
      {onClose ? <button onClick={_ => onClose()}>Close</button> : null }
    </div>
  )
}

export default WeatherCard