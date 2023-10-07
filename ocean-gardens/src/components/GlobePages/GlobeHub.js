import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import image from '../../resources/AQUA_MODIS.20220101_20221231.L3m.YR.CHL.chlor_a.4km.nc.png'
import GlobePage from './GlobePage'
import GlobeHeader from './GlobeHeader'

function GlobeHub() {
    // return (
    //     <>
    //         <div style={{ position: 'absolute', zIndex: 1 }}> 
    //             <h1>teste</h1>
    //         </div>
    //         <div>
    //             <GlobePage />
    //         {/* <iframe src="path/to/globe.html" /> */}
    //         {/* <GlobePage style={{ backgroundColor: 'transparent' }} /> */}
    //         </div>
    //     </>
    // );
    const [selectedBanner, setSelectedBanner] = useState('GlobePage');
    const renderBanner = () => {
        switch (selectedBanner) {
          case 'GlobePage':
            return <GlobePage />;
          case 'GlobePage':
            return <GlobePage />;
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
