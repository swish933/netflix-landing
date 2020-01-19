import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";

import DeviceSection from "../components/DeviceSection";
import { device } from '../data/deviceData';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <DeviceSection device={device} />
      </div>
    );
  }
}
export default App;
