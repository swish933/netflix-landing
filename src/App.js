import React from 'react';
import DeviceList from './DeviceList';
// import Description from './Description';
import {device} from './data/deviceData';
import './styles/App.css';


class App extends React.Component{
  render () {
    return (
      <div className='app'>
        <DeviceList device={device} />
        {/* <Description /> */}
      </div>
     
    )
  }
  
};


export default App;
