import * as React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import WeatherCardBody from "./WeatherCardBody";

test("WeatherCardBody", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<WeatherCardBody day="day" weather="weather" />)
  const {props: {children}} = renderer.getRenderOutput();
  expect(Array.from(children)[0].type).toBe("div")
  expect(children.length).toBe(3)
})