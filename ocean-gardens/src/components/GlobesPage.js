import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import oceanLocations from './OCEAN_LOCATIONS';
import '../styles/GlobesPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import tempScale from '../resources/tempScale.png';
import absortionScale from '../resources/absortionScale.png';
import escalaCrolo from '../resources/escala.png';
import imageCrolo from '../resources/chorolo-AQUA_MODIS.20220101_20221231.L3m.YR.CHL.chlor_a.4km.nc.png';
import imageTemp from '../resources/temperature2022-AQUA_MODIS.20220101_20221231.L3m.YR.SST.sst.4km.nc.png';
import imageRad from '../resources/PhotosynAvailableRadiation-AQUA_MODIS.20220101_20221231.L3m.YR.PAR.par.4km.nc.png';

function GlobesPage() {
  const [text, setText] = useState('ChloroPage');

  const renderText = () => {
    switch (text) {
      case 'ChloroPage':
        return (
          <div className="info-box">
            <h2>Visualize the concentration of chlorophyll on Earth's water!</h2>
            <p>The color intensity represents the amount of chlorophyll. Darker colors indicate higher chlorophyll levels. Black indicates no water. 
              Higher chlorophyll levels contribute to a richer marine life! Feel free to move it around and explore!</p>
            <p className="small-font"> You can change the displayed information below and try to find some corelations! Images are from <a href="https://oceancolor.gsfc.nasa.gov/l3/">NASA. Data from 2022</a></p>
          </div>
        );
      case 'GlobeOceanTemperature':
        return (
          <div className="info-box">
            <h2>Visualize the Temperature of the Oceans on Earth!</h2>
            <p>The color intensity represents the average temperature in 2022, at daytime. Darker colors indicate higher temperatures. Black means no water. Feel free to move it around and explore!</p>
            <p className="small-font"> You can change the displayed information below. Images are from <a href="https://oceancolor.gsfc.nasa.gov/l3/">NASA</a></p>
          </div>
        );
      case 'GlobeAbsortion':
        return (
          <div className="info-box">
            <h2>Visualize the Capacity of light absorption on Earth's water!</h2>
            <p>The color intensity represents the average in 2022, at daytime. Darker colors indicate higher temperatures. Black means no water. Can you find the relation between this and the temperature of the water? Feel free to move it around and explore!</p>
            <p className="small-font"> You can change the displayed information below. Images are from <a href="https://oceancolor.gsfc.nasa.gov/l3/">NASA</a></p>
          </div>
        );
      default:
        return null;
    }
  };

  const [globeImageUrl, setGlobeImageUrl] = useState(imageCrolo);
  const [scalaImage, setScalaImage] = useState(escalaCrolo);

  const changeImages = (newBackgroundImage, newScalaImage, typeGlob) => {
    setGlobeImageUrl(newBackgroundImage);
    setScalaImage(newScalaImage);
    setText(typeGlob);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };
  const globeRef = useRef();

  useEffect(() => {
    // Access controls and set autoRotate to true
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.enableZoom = false;
      globeRef.current.pointOfView({ lat: 20.88, lng: -97.14, altitude: 3.0 });
    }
  }, []); // Empty dependency array ensures the effect runs once when the component mounts


  return (
    <div>
      <div id="header">
        {renderText()}
        <div className="button-group">
          <ButtonGroup variant="contained" style={{display:'flex', position: 'relative', left: '0vh'}}>
            <Link to='../page7'>
              <Button>Previous</Button>
            </Link> 
            <Link to='../globesPage'>
              <Button>Next</Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
      <div className="globe-container">
        <Globe
        ref={globeRef}
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
        <img src={scalaImage} alt="Image Overlay" className="image-overlay" />
        <div className="buttons-container">
          <div className="button-group-vert" style={{position: 'relative', left: '0vw'}} >
            <ButtonGroup orientation = 'vertical' variant="contained">
              <Button
                onClick={() => changeImages(imageCrolo, escalaCrolo, 'ChloroPage')}
              >
                Chlorophyll Concentration
              </Button>
              <Button
                onClick={() => changeImages(imageTemp, tempScale, 'GlobeOceanTemperature')}
              >
                Water Temperature
              </Button>
              <Button
                onClick={() => changeImages(imageRad, absortionScale, 'GlobeAbsortion')}
              >
                Photosynthetically available radiation
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobesPage;
