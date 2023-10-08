import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/southernChukchiSea.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import  ButtonGroup from '@mui/material/ButtonGroup';
import { Howl, Howler } from 'howler';
import ButtonSound from '../resources/click.mp3'
var buttonSound = new Howl({
    src: [ButtonSound]
  })
  
function Topic5page1() {

    return(

        <motion.div className = 'topic5page1'
        initial={{width: 0}}
        animate={{width: '100%'}}
        
        transition={{duration: 0.5}}
        exit={{x:window.innerWidth}}>
            <img src = {Image} style={{position:'absolute', top:'0vh', width:'100%', maxHeight:"100vh", zIndex:"-100"}}>     
            </img>
            <div style={{position:'absolute', top:'0vh', width:'100%', maxHeight:"100vh"}}>
                <motion.div
                initial={{x: '-100%'}}
                animate={{x: '0%'}}
                transition={{duration: 1.2, ease: 'circOut'}}
                style={{position: 'relative', top:'5vh', left: '5vw', width: '90vw'}}
                >
                    <h1 style={{position:'relative', textAlign:'left', color:'white', fontSize: '12vh'}}>Phytoplanktons, </h1>
                    <h2 style={{position:'relative', left:'3vh', color:'#fff', fontSize: '8vh', maxWidth: '60%', textAlign: "left"}}>What would happen if they were gone?</h2>
                </motion.div>
                <motion.div
                initial={{right: '-200vw'}}
                animate={{right: '-50vw'}}
                transition={{duration: 1.2, ease: 'circOut'}}
                style={{position: 'relative', top:'10vh', width:'45vw'}}
                >   
                        <p style={{position:'relative', color:'#fff', fontSize: '4.5vh', top: '-5vh', textAlign:'right'}}>Until now, we showed you all their impacts in our lives, but have you ever imagined how the world would be if their population was massively decreased?</p>
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '-5vh'}}>
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', top:'-8vh', right: '0vw'}}>
                                <Link to='../landingPage'>
                                    <Button onClick={() => buttonSound.play()}>Previous</Button>
                                </Link> 
                                <Link to='../topic5page2'>
                                    <Button onClick={() => buttonSound.play()}>Next</Button>
                                </Link>
                            </ButtonGroup>
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Topic5page1;   