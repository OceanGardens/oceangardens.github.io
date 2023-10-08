import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/andamanSea.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import  ButtonGroup from '@mui/material/ButtonGroup';

function Page3() {

    return(

        <motion.div className = 'page3'
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
                    <h1 style={{position:'relative', textAlign:'left', color:'white', fontSize: '12vh'}}>Oxygen, </h1>
                    <h2 style={{position:'relative', left:'3vh', color:'#fff', fontSize: '8vh', maxWidth: '60%', textAlign: "left"}}>why is it so important for life on Earth?</h2>
                </motion.div>
                <motion.div
                initial={{right: '-200vw'}}
                animate={{right: '-50vw'}}
                transition={{duration: 1.2, ease: 'circOut'}}
                style={{position: 'relative', top:'10vh', width:'45vw'}}
                >   
                        <p style={{position:'relative', color:'#fff', fontSize: '4vh', textAlign:'right'}}>One of the fundamental building blocks of life on Earth, alongside carbon, hydrogen, and nitrogen, oxygen is an essential chemical element found in the organic compounds that make up the bodies of living beings.</p>
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0'}}>
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', top:'5vh', right: '0vw'}}>
                                <Link to='../landingPage'>
                                    <Button>Previous</Button>
                                </Link> 
                                <Link to='../page4'>
                                    <Button>Next</Button>
                                </Link>
                            </ButtonGroup>
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Page3;   