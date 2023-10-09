import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/northSeaBlooms.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material'
import { Howl, Howler } from 'howler';
import ButtonSound from '../resources/click.mp3'
var buttonSound = new Howl({
    src: [ButtonSound]
  })
  
function Topic5page2() {

    return(

        <motion.div className = 'topic5page2'
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
                    <h1 style={{position:'relative', left:'3vh', color:'#fff', fontSize: '3.9vw', maxWidth: '60%', textAlign: "left"}}>Phytoplanktons </h1>
                    <h2 style={{position:'relative', color:'#fff', fontSize: '2.2vw', textAlign:'justify'}}> are the main agent in the process of carbon fixation, being responsible for approximately 70% of oxygen production on Earth. </h2>
                      
                </motion.div>
                <motion.div
                initial={{x: '-105vw'}}
                animate={{x: '5vw'}}
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'0vh', width:'45vw'}}
                >   
                        <h1 style={{position:'relative', color:'#fff', fontSize: '2.2vw', textAlign:'justify'}}>So if their population drastically decreased or if they were simply gone, the levels of oxygen in our atmosphere would highly decrease while the carbon levels would increase! But what are the impacts of those alterations on our Earth?</h1>
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '-5vh'}}>
                            
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', top:'-10vh', left: '77vw'}}>
                                <Link to='../topic5page1'>
                                    <Button onClick={() => buttonSound.play()}>Previous</Button>
                                </Link> 
                                <Link to='../topic5page3'>
                                    <Button onClick={() => buttonSound.play()}>Next</Button>
                                </Link>
                            </ButtonGroup>
        
                            
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Topic5page2;   