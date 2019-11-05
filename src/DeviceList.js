import React from 'react';
import Device from './Device';
import './styles/DeviceList.css';

class DeviceList extends React.Component {
    render() {
        return (
               <div className='devices tc'> 
               {
                    this.props.device.map((device,i) => {
                        return <Device key={i} img={this.props.device[i].img} name={this.props.device[i].name} />
                    })
                }
                    <div className='divider'></div>
                </div>
        )
    }
}

export default DeviceList;