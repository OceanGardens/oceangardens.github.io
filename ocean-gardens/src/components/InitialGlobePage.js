import React, { useRef } from 'react';
import Globe from 'react-globe.gl';
import image from '../resources/earth_daymap.jpg'
import { useCallback, useEffect } from "react";
import '../styles/InitialGlobePage.css'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function InitialGlobePage() {

  const globeRef = useRef();

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
    <div className="globe-container" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Globe
        ref={globeRef}
        globeImageUrl={image}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        enablePointerInteraction={false}
      />
      <div className="text-overlay">
        <Container fluid className="content">
          <Row>
            <div className="info-box">
              <h2>This is our home, Planet Earth!</h2>
              <p>But it should be called Planet Water, because 70% of its surface is covered by water, and only 30% by land. </p>
              <p>Our planet is divided in three main parts: </p>
              <p>Lithosphere: Our rigid layer, composed mainly of rocks, minerals and crystals.</p>
              <p>Atmosphere: Our gas layer, composed of a lot of different gasses, such as oxygen and carbon dioxide.</p>
            </div>
          </Row>
        </Container>
      </div>
      <div className="text-overlay2">
      <Container fluid className="content">
    <Row>
      <Col className="info-box">
        <div className="scrollable-content">
          <p>Finally, and one of the most amazing: the Oceans! They are composed of an enormous quantity of water in different temperatures, shapes and forms.</p>
          <p>In this transmission, we are going to tell you a little bit more about the Oceans, its beauties and its importance to our lives.</p>
        </div>
      </Col>
    </Row>

      <Row>
        <Col className="text-center buttons-container">
          <ButtonGroup>
            <Button
              className="button-next"
              size="sm"
              style={{ fontSize: '12px', padding: '7px 10px' }}
              variant="primary"
              href="/landingPage"
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Previous Page
            </Button>
            <Button
              className="button-next"
              size="sm"
              style={{ fontSize: '12px', padding: '5px 10px' }}
              variant="primary"
              href="/wavePage"
            >
              Next Page <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
        </Container>
      </div>
    </div>
  );
}

export default InitialGlobePage;
