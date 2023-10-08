import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/easternBlackSea.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material'
import { Howl, Howler } from 'howler';
import ButtonSound from '../resources/click.mp3'
var buttonSound = new Howl({
    src: [ButtonSound]
  })
  
function Page6() {

    return(

        <motion.div className = 'page6'
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
                    <h1 style={{position:'relative', textAlign: 'right', color:'white', fontSize: '10vh'}}>But where does Earth's oxygen come from?</h1>
                </motion.div>
                <motion.div
                initial={{x: '-105vw'}}
                animate={{x: '5vw'}}
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'-1vh', width:'45vw'}}
                >   
                        <h1 style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'justify'}}>The oxygen we breathe daily, which has been present in Earth's atmosphere for more than 2.4 billion years, is generated through a process called photosynthesis.</h1>
                        
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '-5vh'}}>
                            
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', top:'-11vh', left: '77vw'}}>
                                <Link to='../page5'>
                                    <Button onClick={() => buttonSound.play()}>Previous</Button>
                                </Link> 
                                <Link to='../page7'>
                                    <Button onClick={() => buttonSound.play()}>Next</Button>
                                </Link>
                            </ButtonGroup>
        
                            
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Page6;   