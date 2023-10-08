import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/northSeaBlooms.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import  ButtonGroup from '@mui/material/ButtonGroup';

function Page61() {

    return(

        <motion.div className = 'page61'
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
                    <h1 style={{position:'relative', textAlign:'left', color:'white', fontSize: '9vh'}}>Let’s preserve and restore our Oceans.</h1>
                    <h2 style={{position:'relative', left:'3vh', color:'#ddf', fontSize: '7vh', maxWidth: '90%', textAlign: "left"}}>Living oceans means living Earth.</h2>
                </motion.div>
                <motion.div
                initial={{right: '-200vw'}}
                animate={{right: '-50vw'}}
                transition={{duration: 1.2, ease: 'circOut'}}
                style={{position: 'relative', top:'14vh', width:'45vw'}}
                >   
                        <p style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'justify'}}>Now that you know how important the oceans and the phytoplanktons are and what would happen if they suddenly disappeared, what can we do to protect them and preserve the Ocean?</p>
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '-5vh'}}>
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', top:'5vh', right: '0vw'}}>
                                <Link to='../carousel'>
                                    <Button>Previous</Button>
                                </Link> 
                                <Link to='../page61'>
                                    <Button>Next</Button>
                                </Link>
                            </ButtonGroup>
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Page61;   