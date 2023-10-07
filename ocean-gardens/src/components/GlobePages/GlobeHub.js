import React, { useState } from 'react';
import GlobePage from './GlobePage'
import GlobeHeader from './GlobeHeader'
import GlobeOceanTemperature from './GlobeOceanTemperature'

function GlobeHub() {
    const [selectedBanner, setSelectedBanner] = useState('GlobePage');
    const renderBanner = () => {
        switch (selectedBanner) {
          case 'GlobePage':
            return <GlobePage />;
          case 'GlobeOceanTemperature':
            return <GlobeOceanTemperature />;
          case 'GlobePage':
            return <GlobePage />;
          default:
            return null;
        }
      };
    
    return (
        <div className='GlobeHub'>
            <GlobeHeader setSelectedBanner={setSelectedBanner}/>
            {renderBanner()}
        </div>
    )
}

export default GlobeHub;
