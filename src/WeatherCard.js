import * as React from "react";
import "./WeatherCard.css";

function WeatherCard(props) {
  return (
    <div className="card">
      <p>{props.weatherType}</p>
    </div>
  )
}

export default WeatherCard