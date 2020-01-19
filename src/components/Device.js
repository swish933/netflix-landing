import React from "react";
import Divider from './Divider'
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
    let img =
      activeIndex === deviceIndex ? this.props.activeimg : this.props.img;

    return (
      <div className='option'>
        <div
        className={activeIndex === deviceIndex ? "deviceCard-active" : "deviceCard"}
        onClick={this.handleClick.bind(this, this.deviceIndex)}
        >
          {/* device image */}
          <div className="deviceImg pa1 d-flex justify-center mb-3">
            <img src={img} alt="deviceImg" /> 
          </div>
          {/* Device name */}
          <div className="deviceName d-flex justify-center">
            <p>{this.props.name}</p>
          </div>
         
        </div>
        {/*Red div */}
        <div>{deviceIndex !== activeIndex ? <Divider /> : null}</div>
      </div>
    );
  }
}

export default Device;
