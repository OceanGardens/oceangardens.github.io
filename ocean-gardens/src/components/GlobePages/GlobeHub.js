import React, { useState } from 'react';
import GlobePage from './GlobePage'
import GlobeHeader from './GlobeHeader'
import GlobeOceanTemperature from './GlobeOceanTemperature'
import GlobeAbsortion from './GlobeAbsortion'

function GlobeHub() {
    const [selectedBanner, setSelectedBanner] = useState('GlobePage');
    const renderBanner = () => {
        switch (selectedBanner) {
          case 'GlobePage':
            return <GlobePage />;
          case 'GlobeOceanTemperature':
            return <GlobeOceanTemperature />;
          case 'GlobeAbsortion':
            return <GlobeAbsortion />;
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
