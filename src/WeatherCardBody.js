import * as React from "react";

function WeatherCardBody (props) {
  const {day, weather, onClose} = props;
  return (
    <React.Fragment>
      <div>{day}</div>
      <div>{weather}</div>
      {onClose ? <button onClick={_ => onClose()}>Close</button> : null}
    </React.Fragment>
  )
}

export default WeatherCardBody