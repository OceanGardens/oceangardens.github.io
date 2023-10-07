import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const GlobeHeader = ({ setSelectedBanner }) => {
    const changeBanner = (newBanner) => {
        setSelectedBanner(newBanner);
    };
    return (
    <Container flui = "md">
        <Row>
        <Row>
            <h2>Sample text</h2>
        </Row>
            <Col><button onClick={() => changeBanner('GlobePage')}> Filoplancton </button></Col>
            <Col><button onClick={() => changeBanner('GlobeOceanTemperature')}> Water Temperature</button></Col>
        </Row>
    </Container>
    );
    // <div className="header">
    //     <button onClick={() => changeBanner('GlobePage')}> Filoplancton </button>
    //     <button onClick={() => changeBanner('GlobeOceanTemperature')}> Water Temperature</button>
    //     {/* <button onClick={() => changeBanner('GlobePage')}>Banner 3</button> */}
    // </div>
}

export default GlobeHeader;
