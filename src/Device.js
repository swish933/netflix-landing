import React from 'react';
import './styles/Device.css'

class Device extends React.Component {
    render() {
        return (
                <div className='deviceCard ba'>
                    <div className='deviceImg pa1'>
                        <img src={this.props.img} alt='deviceImg'/>
                    </div>
                    <div className='deviceName'>
                        <p>{this.props.name}</p>
                    </div>
                </div>
        )
    }
}

export default Device;