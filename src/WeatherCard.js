import * as React from "react";
import "./WeatherCard.css";

function WeatherCard(props) {
  const {day, weather, currentDay, showFullScreen, onClick, onClose} = props;
  console.log(showFullScreen)
  const isCurrentDay = day === currentDay;
  return (
    <div 
      className={`card ${isCurrentDay ? "active" : ""} ${showFullScreen ? "fullScreen" : ""}`}
      onClick = {_ => onClick ? onClick({day, weather}) : null}
    >
      <div>{day}</div>
      <div>{weather}</div>
      {onClose ? <button onClick={_ => onClose()}>Close</button> : null }
    </div>
  )
}

export default WeatherCard