import React from 'react';
import Globe from 'react-globe.gl';
import image from '../../resources/PhotosynAvailableRadiation-AQUA_MODIS.20220101_20221231.L3m.YR.PAR.par.4km.nc.png'
import { useCallback } from "react";
import oceanLocations from './OCEAN_LOCATIONS'
import absortionScale from '../../resources/absortionScale.png'
import './GlobePage.css'
import { Container, Row, Col } from 'react-bootstrap';

function GlobeAbsortion() {
    // 2022 L3
  return (
    <>
      <Container fluid className="content">
      <Row>
              <div className="info-box">
                  <h2>Visualize the Capacity of light absortion on Earth's water!</h2>
                  <p>The color intensity represents the average  in 2022, at daytime. Darker colors indicate higher temperatures, with exception of black which means there is no water. 
                    Can you find the relation between this and the temperature of the water?
                    Feel free to zoom in, move around, and explore!</p>
                  {/* <p>Learn more about ? <a href="#">hmm maybe remove this</a> </p> */}
              </div>
      </Row>
  </Container>
      <div className="image-overlay">
        <img src={absortionScale} alt="Image Overlay" />
      </div>
      <div className="globe-container" style={{ width: '100%', height: '100vh' }} >
        <Globe
          globeImageUrl={image}
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          labelsData={oceanLocations}
          labelText={"label"}
          labelSize={3}
          labelColor={useCallback(() => "white", [])}
          labelDotRadius={0.4}
          labelAltitude={0.05}    
          />
      </div>
    </>
  );
}

export default GlobeAbsortion;
