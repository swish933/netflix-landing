import React from "react";
import "../styles/Device.css";

class Device extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onDeviceClick(this.props.id);
  }

  render() {
    let activeIndex = this.props.activeIndex;
    let deviceIndex = this.props.id;
    let img;
    if (activeIndex == deviceIndex) {
      img = this.props.activeimg;
    }
    img = this.props.img;

    return (
      <div
        className={
          activeIndex == deviceIndex ? "deviceCard-active" : "deviceCard"
        }
        onClick={this.handleClick.bind(this, this.deviceIndex)}
      >
        <div className="deviceImg pa1">
          <img src={img} alt="deviceImg" />
        </div>
        <div className="deviceName">
          <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default Device;
