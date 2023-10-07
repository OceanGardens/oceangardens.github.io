import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import oceanLocations from './OCEAN_LOCATIONS';
import './GlobePage.css';
import { Container, Row, Button, ButtonGroup, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import tempScale from '../../resources/tempScale.png';
import absortionScale from '../../resources/absortionScale.png';
import escalaCrolo from '../../resources/escala.png';
import imageCrolo from '../../resources/chorolo-AQUA_MODIS.20220101_20221231.L3m.YR.CHL.chlor_a.4km.nc.png';
import imageTemp from '../../resources/temperature2022-AQUA_MODIS.20220101_20221231.L3m.YR.SST.sst.4km.nc.png';
import imageRad from '../../resources/PhotosynAvailableRadiation-AQUA_MODIS.20220101_20221231.L3m.YR.PAR.par.4km.nc.png';


function GlobePage() {
  const [globeImageUrl, setGlobeImageUrl] = useState(
    imageCrolo
  );
  const [scalaImage, setScalaImage] = useState(escalaCrolo);

  const changeImages = (newBackgroundImage, newScalaImage) => {
    setGlobeImageUrl(newBackgroundImage);
    setScalaImage(newScalaImage);
  };

  return (
    <>
        <div className="text-container">
            <Container fluid className="content">
        <Row>
          <div className="info-box">
            <h2>Visualize the concentration of chlorophyll on Earth's water bodies!</h2>
            <p>
              The color intensity represents the amount of chlorophyll. Darker colors indicate higher chlorophyll
              levels, except for black, which signifies an absence of water. Higher chlorophyll levels contribute to
              richer marine life. Feel free to zoom in, move around, and explore!
            </p>
          </div>
        </Row>
        <Row>
         <Col className="text-center next-prev">
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
         </Col>
       </Row>

      </Container>
      </div>
      <div className="globe-container">
        <Globe
          globeImageUrl={globeImageUrl}
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          labelsData={oceanLocations}
          labelText={'label'}
          labelSize={3}
          labelColor={() => 'white'}
          labelDotRadius={0.4}
          labelAltitude={0.05}
        />
        <img src={scalaImage} alt="Image Overlay" className="image-overlay"/>
      <Container className="buttons-container">
        <Row>
          <ButtonGroup vertical="true" className="button-group-vert">
            <Button
              variant="primary"
              onClick={() => changeImages(imageCrolo, escalaCrolo)}
            >
              Chlorophyll Concentration 
            </Button>
            <Button
              variant="primary"
              onClick={() => changeImages(imageTemp, tempScale)}
            >
              Water Temperature
            </Button>
            <Button
              variant="primary"
              onClick={() => changeImages(imageRad, absortionScale)}
            >
              Photosynthetically available radiation
            </Button>
          </ButtonGroup>
        </Row>
      </Container>
      </div>
    </>
  );
}

export default GlobePage;
