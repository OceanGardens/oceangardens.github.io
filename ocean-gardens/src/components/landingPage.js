import WaterWave from 'react-water-wave';
import Image1 from "../resources/wallpaper.jpg"
import Image2 from "../resources/wallpaperMed.jpg"
import Image1500 from "../resources/wallpaper1500.jpg"
import ImageSmall from "../resources/imageSmall.jpg"
import "../styles/landingPage.css"
import React, { useEffect, useState } from 'react';

function LandingPage() {

    const getimage=(width, height)=>{
        if(width < 670 && height < 1000){
            return ImageSmall
        }else if(width < 1500 && height < 1000){
            return Image1500
        }else if(width < 2100 && height < 1400){
            return Image2
        }else{
            return Image1
        }
    }
    
  return (
        
        <div className="landingPage">
            <WaterWave
                imageUrl={getimage(window.innerWidth, window.innerHeight)}
                dropRadius={40}
                className="waterWaveCanvas"
                perturbance={0.01}
                resolution={400}
            >
                
                {({pause, play}) => (
                    <div id="landingPageTextContainer">
                        <h1>Ocean Gardens</h1>
                        <h2>How the oceans play a key role in Earth's biosphere</h2>
                    </div>
                )}
            </WaterWave>
            
            
        </div>

  );
}

export default LandingPage;