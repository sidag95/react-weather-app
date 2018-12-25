import * as React from "react";
import "./Clock.css";

const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

class Clock extends React.Component {
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
    return this.props.children({currentTime: this.state.date, currentDay})
  }
}

export default Clock
