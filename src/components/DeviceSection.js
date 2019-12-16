import React from "react";
import Device from "./Device";
import Divider from "../Divider";
import Description from "./Description";
import { device } from "../data/deviceData";
import "./styles/DeviceList.css";

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
      <div className="z-1">
        {/* <div className='devices tc'> 
                    <Device onDeviceClick={this.updateActiveItem} key={0} activeIndex={this.state.activeIndex} id={this.props.device[0].id} img={this.props.device[0].img} name={this.props.device[0].name} />
                    <Device onDeviceClick={this.updateActiveItem} key={1} activeIndex={this.state.activeIndex} id={this.props.device[1].id} img={this.props.device[1].img} name={this.props.device[1].name} />
                    <Device onDeviceClick={this.updateActiveItem} key={2} activeIndex={this.state.activeIndex} id={this.props.device[2].id} img={this.props.device[2].img} name={this.props.device[2].name} />
                    <Device onDeviceClick={this.updateActiveItem} key={3} activeIndex={this.state.activeIndex} id={this.props.device[3].id} img={this.props.device[3].img} name={this.props.device[3].name} />
                    <Device onDeviceClick={this.updateActiveItem} key={4} activeIndex={this.state.activeIndex} id={this.props.device[4].id} img={this.props.device[4].img} name={this.props.device[4].name} />
                    <Device onDeviceClick={this.updateActiveItem} key={5} activeIndex={this.state.activeIndex} id={this.props.device[5].id} img={this.props.device[5].img} name={this.props.device[5].name} />
                    <Device onDeviceClick={this.updateActiveItem} key={6} activeIndex={this.state.activeIndex} id={this.props.device[6].id} img={this.props.device[6].img} name={this.props.device[6].name} />
                </div> */}
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
