import React, { useRef } from 'react';
import Globe from 'react-globe.gl';
import image from '../resources/earth_daymap.jpg'
import { useCallback, useEffect } from "react";
import '../styles/InitialGlobePage.css'
import { Container, Grid, Button, ButtonGroup } from '@mui/material'; // Import Material-UI components
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function InitialGlobePage() {

  const globeRef = useRef();

  const navigate = useNavigate();

  const navigateToGlobePage = () => {
    navigate('/wavePage'); 
  };

  const navigateBack = () => {
    navigate('landingPage')
  }

  useEffect(() => {
    // Access controls and set autoRotate to true
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.3;
      globeRef.current.pointOfView({ lat: 20.88, lng: -97.14, altitude: 4.2 });
    }
  }, []); // Empty dependency array ensures the effect runs once when the component mounts


  return (
    <div className="globe-container">
      <Globe
        ref={globeRef}
        globeImageUrl={image}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        enablePointerInteraction={false}
      />
      <div className="text-overlay" >
        <div className="globeBox">
          <h2>This is our home, Planet Earth!</h2>
          <p>But it should be called Planet Water, because 70% of its surface is covered by water, and only 30% by land. </p>
          <p>Our planet's surface is divided in three main parts: </p>
          <p>Lithosphere: Our rigid layer, composed mainly of rocks, minerals and crystals.</p>
          <p>Atmosphere: Our gas layer, composed of a lot of different gasses, such as oxygen and carbon dioxide...</p>
        </div>
      </div>
      <div className="text-overlay2">
        <div className="globeBox">
          <p>And finally, the Oceans! Bursting with an immense amount of water and brimming with life, they're an incredible marvel!</p>
          <p>In this transmission, we are going to tell you a little bit more about the Oceans, its beauties and its importance to our lives.</p>
        </div>
        <ButtonGroup variant="contained" style={{ display: 'flex', position: 'relative', left: '0vh' }}>
          <Link to="../landingPage">
            <Button>Previous</Button>
          </Link>
          <Link to="../wavePage">
            <Button>Next</Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default InitialGlobePage;
