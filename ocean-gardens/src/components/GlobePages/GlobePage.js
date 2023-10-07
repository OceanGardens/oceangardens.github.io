import React from 'react';
import Globe from 'react-globe.gl';
import image from '../../resources/AQUA_MODIS.20220101_20221231.L3m.YR.CHL.chlor_a.4km.nc.png'
// '../resources/AQUA_MODIS.20021016_20021023.L3m.8D.CHL.chlor_a.4km.nc.png'
import { useEffect, useState, useRef, useCallback } from "react";
import oceanLocations from './OCEAN_LOCATIONS'
import escala from '../../resources/escala.png'

function GlobePage() {

  return (
    <>
      <div>
        <h2>This shows the concentration of chrolophila on Earth!</h2>
        
      </div>
      <div style={{ width: '100%', height: '100vh' }}>
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
