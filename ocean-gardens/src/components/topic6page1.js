import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/bikiniAtoll.png'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material'

function Topic6page1() {

    return(

        <motion.div className = 'topic6page1'
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
                    <h1 style={{position:'relative', textAlign: 'justify', color:'white', fontSize: '6.523vh'}}>So what can we do to protect and preserve the oceans? </h1>
                    <h2 style={{position:'relative', maxWidth: '37vw', textAlign: 'justify', color:'white', fontSize: '4.5vh'}}> The Oceans are affected by Global Warming just as every other part of the planet, so all actions that help us to stop Global Warming are really useful. </h2>
                  
                </motion.div>
                <motion.div
                initial={{right: '-200vw'}}
                animate={{right: '-50vw'}}
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'-10vh', width:'45vw'}}
                >   
                        <h1 style={{position:'relative', color:'#fff', fontSize: '4.5vh', top:'2vh', textAlign:'justify'}}>Simple actions such as recycling and reducing your carbon footprint through some habit changes like trying to use less electricity, using public transport and avoid wasting water and food resources can have a great impact.
</h1>
                        
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', top:'1vh', bottom: '-5vh'}}>
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', right: '0vh'}}>
                                <Link to='../topic5page4'>
                                    <Button>Previous</Button>
                                </Link> 

                                <Link to='../topic6page2'>
                                    <Button>Next</Button>
                                </Link>
                            </ButtonGroup>
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Topic6page1;   