import * as React from "react";
import "./WeatherCard.css";

function WeatherCard(props) {
  const {day, weather} = props;
  return (
    <div className="card">
      <div>{day}</div>
      <div>{weather}</div>
    </div>
  )
}

export default WeatherCard