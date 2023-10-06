import React from 'react';
import Globe from 'react-globe.gl';
import image from '../resources/AQUA_MODIS.20021016_20021023.L3m.8D.CHL.chlor_a.4km.nc.png'


function GlobePage() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Globe
        globeImageUrl={image}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      />
    </div>
  );
}

export default GlobePage;
