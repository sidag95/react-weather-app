import * as React from "react";
import Clock from "./Clock";

const {Provider, Consumer} = React.createContext();

const ClockContextProvider = ({children, ...extra}) => {
 return (
  <Clock>
    {(values) => <Provider value={values}>{children}</Provider>}
  </Clock>
 )
}

const ClockContext = {
  Provider: ClockContextProvider,
  Consumer
}

export default ClockContext
