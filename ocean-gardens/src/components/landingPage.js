import WaterWave from 'react-water-wave';
import Image1 from "../resources/wallpaper/wallpaper.jpg"
import Image2 from "../resources/wallpaper/wallpaperMed.jpg"
import Image1800 from "../resources/wallpaper/wallpaper1800.jpg"
import Image1500 from "../resources/wallpaper/wallpaper1500.jpg"
import ImageSmall from "../resources/wallpaper/imageSmall.jpg"
import ImageSmaller from "../resources/wallpaper/imageSmaller.jpg"
import "../styles/landingPage.css"
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion'

function LandingPage() {

    const getBackgroundImage=(width, height)=>{
        if(width < 450 && height < 675){
            return ImageSmaller
        }else if(width < 670 && height < 1000){
            return ImageSmall
        }else if(width < 1500 && height < 1000){
            return Image1500
        }else if(width < 1800 && height < 1200){
            return Image1800
        }else if(width < 2100 && height < 1400){
            return Image2
        }else{
            return Image1
        }
    }
    
  return (
        
        <motion.div className="landingPage"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition= {{duration: 5}}>
            <WaterWave
                imageUrl={getBackgroundImage(window.innerWidth, window.innerHeight)}
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
            
            
        </motion.div>

  );
}

export default LandingPage;