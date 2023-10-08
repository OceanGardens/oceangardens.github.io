import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/goodImages/tasmanSea.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material'

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
                    <h1 style={{position:'relative', textAlign: 'right', color:'white', fontSize: '4.5vh'}}>In reality, the primary agents are a group of microorganisms known as phytoplankton, consisting of microalgae and specific bacteria. These organisms predominantly live in aquatic environments, especially in the oceans.</h1>
                </motion.div>
                <motion.div
                initial={{x: '-105vw'}}
                animate={{x: '5vw'}}
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'-1vh', width:'45vw'}}
                >   
                        <h1 style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'justify'}}>Because of that, you can think of our oceans as massive gardens. It is those beautiful painting-like gardens that you are seeing in the background of these pages, as seen by NASA satellites.</h1>
                        
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '-5vh'}}>
                            
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', top:'-11vh', left: '77vw'}}>
                                <Link to='../page7'>
                                    <Button>Previous</Button>
                                </Link> 
                                <Link to='../previewGlobesPage'>
                                    <Button>Next</Button>
                                </Link>
                            </ButtonGroup>
        
                            
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Page6;   