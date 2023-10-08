import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/LC08_L1TP_131050_20191129_20191129_01_RT.AndamanSea.crop.small.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material'

function Page4() {

    return(

        <motion.div className = 'page4'
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
                    <p style={{position:'relative', textAlign: 'justify', color:'white', fontSize: '4.5vh'}}>In the water, the oxygen is just one of its components to form this liquid that we all know and drink for surviving. In addition to this, oxygen gas is mixed in almost every source of wate</p>
                    
                </motion.div>
                <motion.div
                initial={{right: '-200vw'}}
                animate={{right: '-50vw'}}
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'5vh', width:'45vw'}}
                >   
                        <p style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'justify'}}>Oxygen is an atom (a really tiny part of matter!) that is present in two of the most important things in our lives: Water and Air! </p>
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '-5vh'}}>
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', right: '0vh'}}>
                                <Link to='../page3'>
                                    <Button>Previous</Button>
                                </Link> 
                                <Link to='../page5'>
                                    <Button>Next</Button>
                                </Link>
                            </ButtonGroup>
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Page4;   