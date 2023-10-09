import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/tasmanSea.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material'
import { Howl, Howler } from 'howler';
import ButtonSound from '../resources/click.mp3'
var buttonSound = new Howl({
    src: [ButtonSound]
  })
  
function Topic5page4() {

    return(

        <motion.div className = 'topic5page4'
        initial={{width: 0}}
        animate={{width: '100%'}}
        transition={{duration: 0.5}}
        exit={{x:window.innerWidth}}>
            <img src = {Image} style={{position:'absolute', top:'0vh', width:'100%', maxHeight:"100vh", zIndex:"-100"}}>     
            </img>
            <div style={{position:'absolute', top:'0vh', width:'100%', maxHeight:"100vh"}}>
                <motion.div
                initial={{x: '150vw'}}
                animate={{x: '50vw'}}
                transition={{duration: 1.2, ease: 'circOut'}}
                style={{position: 'relative', top:'5vh', left: '0vw', width: '45vw', height:'50vh'}}
                >
                    <h1 style={{position:'relative', textAlign: 'justify', color:'white', fontSize: '2.05vw'}}>Lastly, According to the International Panel on Climate Change (IPCC), there is a lot of evidence that human actions are also contributing to an alarming increase in Global Warming.</h1>
                </motion.div>
                <motion.div
                initial={{x: '-105vw'}}
                animate={{x: '5vw'}}
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'-1vh', width:'45vw'}}
                >   
                        <h1 style={{top:'-4vh', position:'relative', color:'#fff', fontSize: '2.05vw', textAlign:'justify'}}>This affects every single aspect of life on Earth, because it drastically changes the way ecosystems interact with each other. The rise in temperature of the Earth is responsible for climate anomalies, melting of polar ice caps, forest fires and the rise of water temperature that impacts all marine life.</h1>
                        
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '2vh'}}>
                            
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', top:'-6vh', left: '77vw'}}>
                                <Link to='../topic5page3'>
                                    <Button onClick={() => buttonSound.play()}>Previous</Button>
                                </Link> 
                                <Link to='../topic6page1'>
                                    <Button onClick={() => buttonSound.play()}>Next</Button>
                                </Link>
                            </ButtonGroup>
        
                            
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Topic5page4;   