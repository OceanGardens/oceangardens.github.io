import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './GlobeHeader.css'

const GlobeHeader = ({ setSelectedBanner }) => {
    const changeBanner = (newBanner) => {
        setSelectedBanner(newBanner);
    };
    return (
    <Container flui = "md" className="header-container">
        <Row>
        <Row>
            <h2>Sample text</h2>
        </Row>
            <Col><Button variant="primary" onClick={() => changeBanner('GlobePage')}> Filoplancton </Button></Col>
            <Col><Button variant="primary" onClick={() => changeBanner('GlobeOceanTemperature')}> Water Temperature</Button></Col>
        </Row>
    </Container>
    );
}

export default GlobeHeader;
