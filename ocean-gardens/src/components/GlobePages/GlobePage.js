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
  const [text, setText] = useState('ChloroPage');

  const renderText = () => {
    switch (text) {
      case 'ChloroPage':
        return (
          <div className="info-box">
            <h2>Visualize the concentration of chlorophyll on Earth's water bodies!</h2>
            <p>The color intensity represents the amount of chlorophyll. Darker colors indicate higher chlorophyll levels, except for black, which signifies an absence of water. Higher chlorophyll levels contribute to richer marine life. Feel free to zoom in, move around, and explore!</p>
            <p className="small-font"> You can change the displayed information below. Images from <a href="https://oceancolor.gsfc.nasa.gov/l3/">NASA</a></p>

        </div>
        );
      case 'GlobeOceanTemperature':
        return (
          <div className="info-box">
            <h2>Visualize the Temperature of the Oceans on Earth!</h2>
            <p>The color intensity represents the average temperature in 2022, at daytime. Darker colors indicate higher temperatures, with exception of black which means there is no water. Feel free to zoom in, move around, and explore!</p>
            {/* <p>Learn more about ? <a href="#">hmm maybe remove this</a> </p> */}
        </div>
        );
      case 'GlobeAbsortion':
        return (
          <div className="info-box">
            <h2>Visualize the Capacity of light absortion on Earth's water!</h2>
            <p>The color intensity represents the average  in 2022, at daytime. Darker colors indicate higher temperatures, with exception of black which means there is no water. 
              Can you find the relation between this and the temperature of the water?
              Feel free to zoom in, move around, and explore!</p>
            {/* <p>Learn more about ? <a href="#">hmm maybe remove this</a> </p> */}
        </div>
        );
      default:
        return null;
    }
  };

  const [globeImageUrl, setGlobeImageUrl] = useState(
    imageCrolo
  );
  const [scalaImage, setScalaImage] = useState(escalaCrolo);


  const changeImages = (newBackgroundImage, newScalaImage) => {
    setGlobeImageUrl(newBackgroundImage);
    setScalaImage(newScalaImage);
  };

  return (
    <div> 
      <div id="header">
        {renderText()}
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
      </div>
      <div className="globe-container">
        <Globe
          globeImageUrl={globeImageUrl}
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          labelsData={oceanLocations}
          labelText={'label'}
          width={'100vw'}
          height={'100vh'}
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
    </div> 
  );
}

export default GlobePage;
