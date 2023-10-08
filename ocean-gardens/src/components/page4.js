import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/frenchWhitecaps.jpg'
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
                initial={{x: '150vw'}}
                animate={{x: '50vw'}}
                transition={{duration: 1.2, ease: 'circOut'}}
                style={{position: 'relative', top:'5vh', left: '0vw', width: '45vw', height:'50vh'}}
                >
                    <h1 style={{position:'relative', left:'3vh', color:'#fff', fontSize: '8vh', maxWidth: '60%', textAlign: "left"}}>Oxygen </h1>
                    <h2 style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'justify'}}> is one of the components of water, the thing that we all know and drink for surviving. In addition to this, oxygen gas is mixed in almost every source of water. </h2>
                      
                </motion.div>
                <motion.div
                initial={{x: '-105vw'}}
                animate={{x: '5vw'}}
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'0vh', width:'45vw'}}
                >   
                        <h1 style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'justify'}}>It is also the most important element present in the air we breathe for almost every living being. This happens because the oxygen air, represented by the formula O2, plays a major role in the breathing process.</h1>
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '-5vh'}}>
                            
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', top:'-10vh', left: '77vw'}}>
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