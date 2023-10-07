import React from 'react';
import Globe from 'react-globe.gl';
import image from '../../resources/AQUA_MODIS.20220101_20221231.L3m.YR.CHL.chlor_a.4km.nc.png'
import { useCallback } from "react";
import oceanLocations from './OCEAN_LOCATIONS'
import escala from '../../resources/escala.png'
import './GlobePage.css'
import { Container, Row, Col } from 'react-bootstrap';

function GlobePage() {

  return (
    <>
    <Container fluid className="content">
      <Row>
              <div className="info-box">
                  <h2>Visualize the concentration of chlorophyll on Earth's water bodies!</h2>
                  <p>The color intensity represents the amount of chlorophyll. Darker colors indicate higher chlorophyll levels, except for black, which signifies an absence of water. Higher chlorophyll levels contribute to richer marine life. Feel free to zoom in, move around, and explore!</p>
                  <p>Learn more about the importance of <a href="#">chlorophyll</a> in marine ecosystems.</p>
              </div>
      </Row>
  </Container>
      <div className="image-overlay">
        <img src={escala} alt="Image Overlay" />
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

export default GlobePage;
