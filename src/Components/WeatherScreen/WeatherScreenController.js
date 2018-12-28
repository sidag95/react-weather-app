import * as React from "react";
import Api from "../../MockApi"
import WeatherScreen from "./WeatherScreen";

class Controller extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isLoading: true
    }
  }
 
  componentDidMount() {
    this.getData()
  }

  async getData() {
    try {
      const data = await this.props.api.getData("MyDummyUrl");
      this.setState({data, isLoading: false})
    } catch(error) {
      console.warn(error)
      this.setState({data: [], isLoading: false})
    }
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading ...</div>
    }
    if (this.state.data.length === 0) {
      return <div>Failed to load data. Please reload!</div>
    }
    return this.props.children(this.state.data)
  }
}

function WeatherScreenController(props) {
  return (
    <Api>
      {(api) => (
        <Controller api={api}>
          {(data) => <WeatherScreen data={data} {...props} />}
        </Controller>
      )}
    </Api>
  )
}

export default WeatherScreenController