// @flow
import * as React from "react";

type Props = {
  day: string,
  weather: string,
  onClose?: Function
}

function WeatherCardBody (props: Props) {
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