import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './GlobeHeader.css'
import { ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
 
const GlobeHeader = ({ setSelectedBanner }) => {
    const changeBanner = (newBanner) => {
        setSelectedBanner(newBanner);
    };
    return (
    <Container flui = "md" className="header-container">
        <Row>
        <Row>
            <h2>Explore Earth's Ocean! Images from <a href="https://oceancolor.gsfc.nasa.gov/l3/">NASA</a></h2>
        </Row>
            <Col><Button variant="primary" onClick={() => changeBanner('GlobePage')}> Chlorophyll Concentration </Button></Col>
            <Col><Button variant="primary" onClick={() => changeBanner('GlobeOceanTemperature')}> Water Temperature </Button></Col>
            <Col><Button variant="primary" onClick={() => changeBanner('GlobeAbsortion')}> Photosynthetically available radiation </Button></Col>
        </Row>
        <Row>
        <ButtonGroup>
             <Button
               className="button-next"
               size="sm"
               style={{ fontSize: '12px', padding: '7px 10px' }}
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
        </Row>
    </Container>
    );
}

export default GlobeHeader;
