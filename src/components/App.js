import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";

import DeviceSection from "./DeviceSection";
import { device } from "../data/deviceData";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Welcome />
        <DeviceSection device={device} />
      </div>
    );
  }
}
export default App;
