import * as React from "react";
import "./WeatherCard.css";

function WeatherCard(props) {
  const {day, weather, currentDay} = props;
  const isCurrentDay = day === currentDay;
  return (
    <div className={`card ${isCurrentDay ? "active" : ""}`}>
      <div>{day}</div>
      <div>{weather}</div>
    </div>
  )
}

export default WeatherCard