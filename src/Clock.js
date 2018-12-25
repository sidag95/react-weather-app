import * as React from "react";

class Clock extends React.Component {
  componentDidMount() {
    this.tick();
  }

  tick() {
    setInterval(() => {
      this.props.updateDate(new Date());
    }, 1000);
  }

  render() {
    return (
      <div className="clock">{this.props.date.toLocaleTimeString()}</div>
    )
  }
}

export default Clock