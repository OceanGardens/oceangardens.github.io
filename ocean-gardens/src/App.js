import logo from './logo.svg';
import WaterWave from 'react-water-wave';
import LandingPage from './components/landingPage';
import ContentPage from './components/contentPage';
import Navigator from './components/navigator';
import TransmissionPage from './components/transmissionPage'
import {Helmet} from "react-helmet"
import React, {useState} from 'react';



function App() {
  
  const [landingPg, setLandingPg] = useState(false)
  const [clicks, setClicks] = useState(0)
  
  return (
    <div style={{flex: 1, flexDirection: 'column'}}>
      <Navigator setLandingPage = {setLandingPg} LandingPage = {landingPg} clicks = {clicks} setClicks = {setClicks}/>
    </div>
  );
}

export default App;
