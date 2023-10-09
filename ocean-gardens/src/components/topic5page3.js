import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/southernYellowSea.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material'
import { Howl, Howler } from 'howler';
import ButtonSound from '../resources/click.mp3'
var buttonSound = new Howl({
    src: [ButtonSound]
  })
  
function Topic5page3() {

    return(

        <motion.div className = 'topic5page3'
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
                    <h1 style={{position:'relative', textAlign: 'justify', color:'white', fontSize: '2.1vw'}}>In the aquatic environment, besides the oxygen problem, the food offer for all living beings would decrease, because the phytoplanktons are the base of the aquatic food chain, meaning that the diminish in their population leads to a decrease in every single trophic level.</h1>
                  
                </motion.div>
                <motion.div
                initial={{right: '-200vw'}}
                animate={{right: '-50vw'}}      
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'-10vh', width:'45vw'}}
                >   
                        <h1 style={{position:'relative', color:'#fff', fontSize: '2.1vw', top:'10vh', textAlign:'justify'}}>As for the inflation of carbon dioxide levels, it would result in an intensification of Global Warming (phenomenon responsible for the rising in Earth's temperature), which brings a bunch of other negative consequences.</h1>
                        
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', top:'12vh', bottom: '-5vh'}}>
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', right: '0vh'}}>
                                <Link to='../topic5page2'>
                                    <Button onClick={() => buttonSound.play()}>Previous</Button>
                                </Link> 

                                <Link to='../topic5page4'>
                                    <Button onClick={() => buttonSound.play()}>Next</Button>
                                </Link>
                            </ButtonGroup>
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Topic5page3;   