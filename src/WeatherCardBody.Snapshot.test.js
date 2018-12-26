import * as React from "react";
import TestRenderer from "react-test-renderer";
import WeatherCardBody from "./WeatherCardBody";

test("WeatherCardBody Snapshot", () => {
  const render = TestRenderer.create(<WeatherCardBody day="day" weather="weather" />).toJSON()
  expect(render).toMatchSnapshot();
})