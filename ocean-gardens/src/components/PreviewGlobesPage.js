import React, { useRef } from 'react';
import Globe from 'react-globe.gl';
import image from '../resources/chorolo-AQUA_MODIS.20220101_20221231.L3m.YR.CHL.chlor_a.4km.nc.png'
import { useCallback, useEffect } from "react";
import '../styles/InitialGlobePage.css'
import { Container, Grid, Button, ButtonGroup } from '@mui/material'; // Import Material-UI components
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function PreviewGlobesPage() {

  const globeRef = useRef();

  const navigate = useNavigate();

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
      <div className="text-overlay">
        <div className="globeBox">
          <h2>Time to explore!</h2>
          <p>The globe you are seeing is interactive and shows concentrations of chlorophyll on the ocean. Red representent high concentrations, while bluish tones representent low concentrations. Land is highlighted in black, thats why you
            can see the continents clearly.
          </p>
          <p>In the next page you will be able to explore the globe in more detail, visualizing also water temperature and available radiation.</p>
        </div>
      </div>
      <div className="text-overlay2">
        <div className="globeBox">
          <p> Try to figure out the relations between those three elements! </p>
          <p> Remember that chlorophyll is related to photosynthesis, and that this requires the sun's  radiation. Enjoy!</p>
        </div>
        <ButtonGroup variant="contained" style={{ display: 'flex', position: 'relative', left: '0vh' }}>
          <Link to="../page81">
            <Button>Previous</Button>
          </Link>
          <Link to="../globesPage">
            <Button>Next</Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default PreviewGlobesPage;
