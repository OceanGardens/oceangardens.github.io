import React from 'react';
import Globe from 'react-globe.gl';
import image from '../../resources/temperature2022-AQUA_MODIS.20220101_20221231.L3m.YR.SST.sst.4km.nc.png'
import { useCallback } from "react";
import oceanLocations from './OCEAN_LOCATIONS'
import escala from '../../resources/escala.png'
import './GlobePage.css'

function GlobeOceanTemperature() {

  return (
    <>
      <div>
        <h2>This shows the Average temperature of the waters (daytime) in 2022</h2>
      </div>
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

export default GlobeOceanTemperature;
