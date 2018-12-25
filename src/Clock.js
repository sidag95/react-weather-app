import * as React from "react";
import "./Clock.css";

const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

function withClock(Component) {
  return class Clock extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        date: new Date()
      };
      this.updateDate = this.updateDate.bind(this)
    }
    componentDidMount(props) {
      this.tick();
    }

    updateDate(newDate) {
      this.setState({date: newDate});
    }

    tick() {
      setInterval(() => {
        this.updateDate(new Date());
      }, 1000);
    }

    render() {
    const currentDay = dayOfWeek[this.state.date.getDay()];
      return (
        <Component {...this.props} currentTime = {this.state.date} currentDay={currentDay} />
      )
    }
  }
}

export default withClock