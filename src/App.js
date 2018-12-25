import * as React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import WeatherScreenController from "./WeatherScreenController";

const WeatherComponent = (props) => (
  <div className="App">
    <header>My weather app</header>
    <WeatherScreenController {...props} />
  </div>
);

const Home = () => (
  <div className="App">
    <header>My app</header>
    <Link to="/weather">Open weather app</Link>
  </div>
)

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/weather" exact component={WeatherComponent} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
