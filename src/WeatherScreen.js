import * as React from "react";
import WeatherCard from "./WeatherCard";

class WeatherScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    setInterval(() => {
      this.setState({date: new Date()})
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>Time: {this.state.date.toLocaleTimeString()}</p>
        <WeatherCard weatherType = {this.props.weatherType} />
      </div>
    )
  }

}

export default WeatherScreen