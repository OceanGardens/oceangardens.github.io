import logo from './logo.svg';
import WaterWave from 'react-water-wave';
import LandingPage from './components/landingPage';
import ContentPage from './components/contentPage';
import Navigator from './components/navigator';
import TransmissionPage from './components/transmissionPage'
import {Helmet} from "react-helmet"
import React, {useState} from 'react';  
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'


function App() {
  const [landingPg, setLandingPg] = useState(false)
  const [clicks, setClicks] = useState(0)
  
  return (
    <Router>
      <div style={{flex: 1, flexDirection: 'column'}}>
        <Navigator setLandingPage = {setLandingPg} LandingPage = {landingPg} clicks = {clicks} setClicks = {setClicks}/>
      </div>
    </Router>
    
  );
}

export default App;
