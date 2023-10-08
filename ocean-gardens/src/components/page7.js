import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/benguelaCurrent.png'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import  ButtonGroup from '@mui/material/ButtonGroup';

function Page7() {

    return(

        <motion.div className = 'page7'
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
                    <h1 style={{position:'relative', left:'3vh', color:'#fff', fontSize: '8vh', maxWidth: '60%', textAlign: "left"}}>Photosynthesis </h1>
                    <h2 style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'justify', maxWidth:'60vw'}}>is a process that utilizes water, light and CO2 to generate energy for certain living organisms that we call autotrophs, and, besides energy, it produces oxygen!</h2>
                </motion.div>
                <motion.div
                initial={{right: '-200vw'}}
                animate={{right: '-50vw'}}
                transition={{duration: 1.2, ease: 'circOut'}}
                style={{position: 'relative', top:'10vh', width:'45vw'}}
                >   
                        <h1 style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'right'}}>It is also the main process that allows other organisms to live, because it produces almost every single molecule of oxygen gas that we breathe, and drops the levels of CO2!</h1>
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '-5vh'}}>
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', top:'0vh', right: '0vw'}}>
                                <Link to='../page6'>
                                    <Button>Previous</Button>
                                </Link> 
                                <Link to='../globesPage'>
                                    <Button>Next</Button>
                                </Link>
                            </ButtonGroup>
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Page7;   