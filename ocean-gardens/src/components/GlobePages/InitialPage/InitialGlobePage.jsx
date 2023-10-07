import React, { useRef } from 'react';
import Globe from 'react-globe.gl';
import image from '../../../resources/earth_daymap.jpg'
import { useCallback, useEffect } from "react";
import './InitialGlobePage.css'
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
              <h2>This is our planet, Earth!</h2>
              <p>But, it should be planet water, because 70% of it is water, that is, there is more water than earth! </p>
              <p>When I was a young boy
                My father took me into the city
                To see a marching band
                He said, "Son, when you grow up
                Would you be the savior..." </p>
              {/* <p>Learn more about ? <a href="#">hmm maybe remove this</a> </p> */}
            </div>
          </Row>
        </Container>
      </div>
      <div className="text-overlay2">
      <Container fluid className="content">
    <Row>
      <Col className="info-box">
        <div className="scrollable-content">
          <p>
            Sample text. color intensity represents the average temperature in 2022, at daytime. Darker colors indicate higher temperatures, with an exception of black, which means there is no water. Feel free to zoom in, move around, and explore!
          </p>
        </div>
      </Col>
    </Row>

      <Row>
        <Col className="text-center buttons-container">
          <ButtonGroup>
            <Button
              className="button-next"
              size="sm"
              style={{ fontSize: '12px', padding: '5px 10px' }}
              variant="primary"
              href="/previous-page"
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Previous Page
            </Button>
            <Button
              className="button-next"
              size="sm"
              style={{ fontSize: '12px', padding: '5px 10px' }}
              variant="primary"
              href="/next-page"
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
