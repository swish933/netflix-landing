import React from 'react';
import Header from './components/Header'
import './App.css';
import DeviceSection from './DeviceSection';
import {device} from './data/deviceData';
import './styles/App.css';


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
