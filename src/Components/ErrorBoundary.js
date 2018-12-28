import * as React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    };
  }

  componentDidCatch(error) {
    this.setState({error})
    console.warn(error)
  }

  render() {
    if (this.state.error) {
      return <div>Oops! Caught error in your application. Please reload</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary