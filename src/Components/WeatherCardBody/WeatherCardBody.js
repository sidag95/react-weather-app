// @flow
import * as React from "react";

type Props = {
  day: string,
  weather: string,
  low: number,
  high: number,
  onClose?: Function
}

function WeatherCardBody (props: Props) {
  const {day, weather, low, high, onClose} = props;
  return (
    <React.Fragment>
      <div>{day}</div>
      <div>
        {weather}
        <div>
          {low ? <span>{` Low: ${low}\u00b0C `}</span> : null}
          {high ? <span>{` High: ${high}\u00b0C `}</span> : null}
        </div>
      </div>
      {onClose ? <button onClick={_ => onClose()}>Close</button> : null}
    </React.Fragment>
  )
}

export default WeatherCardBody