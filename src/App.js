import React from 'react';
import DeviceSection from './DeviceSection';
import {device} from './data/deviceData';
import './styles/App.css';


class App extends React.Component{

  render () {
    return (
      <div className='app'>
        <DeviceSection device={device} />
      </div>
     
    )
  }
  
};


export default App;
