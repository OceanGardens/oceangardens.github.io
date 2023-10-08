import React, { useRef } from 'react';
import Globe from 'react-globe.gl';
import image from '../resources/temperature2022-AQUA_MODIS.20220101_20221231.L3m.YR.SST.sst.4km.nc.png'
import { useCallback, useEffect } from "react";
import '../styles/InitialGlobePage.css'
import { Container, Grid, Button, ButtonGroup } from '@mui/material'; // Import Material-UI components
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function PreviewGlobesPage() {

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
      <div className="text-overlay" style = {{width: '40vw', height: '60vh', backgroundColor: 'rgba(255, 0, 255, 0)'}}>
        <Container fluid className="content" style = {{backgroundColor: 'rgba(255, 0, 255, 0)', padding: '0px'}}>
          <Grid container>
            <div className="info-box">
              <h2>Time to explore!</h2>
              <p>The globe that you are seeing shows the average temperature of the Earths oceans in 2022. Red means warmer, blue means colder. Black means there is not enough water, thats why you
                can see the continents in black.
                 </p>
              <p>In the next page you will be able to move the globe around and see the ocean temperature, chlorophyll concentration and available radiation.</p>
            </div>
          </Grid>
        </Container>
      </div>
      <div className="text-overlay2">
        <Container fluid className="content" style={{ height: '35vh', backgroundColor: 'rgba(255, 0, 255, 0)', padding: '0px' }}>
          <Grid container>
            <Grid item className="info-box">
              <div className="scrollable-content">
                <p> Try to figure out what are the relation between this three elements! </p>
                <p> Remember that chlorophyll is related to photosynthesis, and that this requires the sun's  radiation. Enjoy!</p>
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item className="text-center buttons-container" style={{ position: 'absolute', maxHeight: '5vh', right: '5vw', top: '32vh' }}>
              <ButtonGroup variant="contained" style={{ display: 'flex', position: 'relative', left: '0vh' }}>
                <Link to="../page8">
                  <Button>Previous</Button>
                </Link>
                <Link to="../globesPage">
                  <Button>Next</Button>
                </Link>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default PreviewGlobesPage;
