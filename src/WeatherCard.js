import * as React from "react";
import "./WeatherCard.css";

function WeatherCard(props) {
  const {day, weather, currentDay, showFullScreen} = props;
  console.log(showFullScreen)
  const isCurrentDay = day === currentDay;
  return (
    <div className={`card ${isCurrentDay ? "active" : ""} ${showFullScreen ? "fullScreen" : ""}`}>
      <div>{day}</div>
      <div>{weather}</div>
    </div>
  )
}

export default WeatherCard