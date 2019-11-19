import React from "react";
import Device from "./Device";
import Divider from "./Divider";
import Description from "./Description";
import { device } from "../data/deviceData";
import "../styles/DeviceList.css";

class DeviceSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1
    };
    this.updateActiveItem = this.updateActiveItem.bind(this);
  }

  updateActiveItem = id => {
    this.setState({ activeIndex: id });
  };

  render() {
    return (
      <div>
        <div className="devices tc">
          {this.props.device.map((device, i) => {
            return (
              <Device
                onDeviceClick={this.updateActiveItem}
                key={i}
                activeIndex={this.state.activeIndex}
                id={this.props.device[i].id}
                img={this.props.device[i].img}
                activeimg={this.props.device[i].activeimg}
                name={this.props.device[i].name}
              />
            );
          })}
        </div>
        <Divider />
        <Description device={device} id={this.state.activeIndex} />
      </div>
    );
  }
}

export default DeviceSection;
