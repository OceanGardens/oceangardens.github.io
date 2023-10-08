import logo from './logo.svg';
import WaterWave from 'react-water-wave';
import LandingPage from './components/landingPage';
import ContentPage from './components/wavePage';
import Navigator from './components/navigator';
import ImagePage from './components/phytoplanktonPage';
import TransmissionPage from './components/transmissionPage'
import {Helmet} from "react-helmet"
import React, {useState} from 'react';  
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'


function App() {
  const [landingPg, setLandingPg] = useState(false)
  const [clicks, setClicks] = useState(0)
  
  return (

    <ImagePage></ImagePage>
  
  );
}

export default App;
