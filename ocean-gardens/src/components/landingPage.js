import WaterWave from 'react-water-wave';
import Image from "../resources/wallpaper_2.jpg"
import "../styles/landingPage.css"
import React, { useEffect } from 'react';

function LandingPage() {

  return (
        <div className="landingPage">
            <WaterWave
                imageUrl={Image}
                dropRadius={40}
                className="waterWaveCanvas"
                perturbance={0.01}
                resolution={400}
            >
                {({pause, play}) => (
                    <div id="landingPageTextContainer">
                            {window.innerWidth > 1024 ? (
                                <div id="animatedTitleContainer">
                                    <div className='textAlign'>
                                        <h1>Ocean Gardens</h1>
                                        <h1>Ocean Gardens</h1>
                                    </div>
                                </div>
                            ): (
                                <h1>Ocean Gardens</h1>
                            )}
                        <h2>How the oceans play a key role in Earth's biosphere</h2>
                    </div>
                )}
            </WaterWave>
        </div>
  );
}

export default LandingPage;