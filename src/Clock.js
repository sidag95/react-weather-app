import * as React from "react";
import "./Clock.css";

const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

class Clock extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        date: new Date(),
        intervalId: null
      };
      this.updateDate = this.updateDate.bind(this)
    }
    componentDidMount(props) {
      this.tick();
    }

    componentWillUnmount() {
      clearInterval(this.state.intervalId);
    }

    updateDate(newDate) {
      this.setState({date: newDate});
    }

    tick() {
      const intervalId = setInterval(() => {
        this.updateDate(new Date());
      }, 1000);
      this.setState({intervalId})
    }

    render() {
    const currentDay = dayOfWeek[this.state.date.getDay()];
    return this.props.children({currentTime: this.state.date, currentDay})
  }
}

export default Clock
