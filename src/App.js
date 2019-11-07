import React from 'react';
import Header from './components/Header'
import DeviceSection from './DeviceSection';
import {device} from './data/deviceData';


class App extends React.Component{

  render () {
    return (
      <div className='app'>
        { Header() }
        <DeviceSection device={device} />
      </div>
     
    )
  }
  
};
export default App;
