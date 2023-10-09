import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/queenslandSawdust.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material'
import { Howl, Howler } from 'howler';
import ButtonSound from '../resources/click.mp3'
var buttonSound = new Howl({
    src: [ButtonSound]
  })
  
function Topic6page3() {

    return(

        <motion.div className = 'topic6page3'
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
                style={{position: 'relative', top:'5vh', left: '5vw', width: '45vw', height:'50vh'}}
                >
                    <h1 style={{position:'relative', textAlign: 'justify', color:'white', fontSize: '4.3vh'}}>All these actions are challenges that we face to preserve our seas! But our largest garden really needs to be taken care of.
We hope you could learn a little bit more about our Earth and mainly about our Oceans, its habitants and the incredible things that it provides us.</h1>
                  
                </motion.div>
                <motion.div
                initial={{right: '-200vw'}}
                animate={{right: '-50vw'}}
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'-0vh', width:'45vw'}}
                >   
                        <h1 style={{position:'relative', color:'#fff', fontSize: '4.3vh', top:'2vh', textAlign:'justify'}}>We encourage you to continue to study this topic, so that you can join us in the fight to preserve and protect it. Before you go, we prepared a little Quiz Game! We hope you enjoy it as much as we did.</h1>
                        
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', top:'1vh', bottom: '-5vh'}}>
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', right: '0vh'}}>
                                <Link to='../topic6page2'>
                                    <Button onClick={() => buttonSound.play()}>Previous</Button>
                                </Link> 

                                <Link to='../minigamePage'>
                                    <Button onClick={() => buttonSound.play()}>Next</Button>
                                </Link>
                            </ButtonGroup>
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Topic6page3;   