import "../styles/contentPage.css"
import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/LC08_L1TP_131050_20191129_20191129_01_RT.AndamanSea.crop.small.jpg'
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
                    <h2 style={{position:'relative', left:'3vh', color:'#ccf', fontSize: '8vh', maxWidth: '60%', textAlign: "left"}}>why is it so important for human beings?</h2>
                </motion.div>
                <motion.div
                initial={{right: '-200vw'}}
                animate={{right: '-50vw'}}
                transition={{duration: 1.2, ease: 'circOut'}}
                style={{position: 'relative', top:'5vh', width:'45vw'}}
                >   
                        <p style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'right'}}>Oxygen is an atom (a really tiny part of matter!) that is present in two of the most important things in our lives: Water and Air! </p>
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '-5vh'}}>
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', right: '0vh'}}>
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