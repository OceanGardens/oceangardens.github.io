import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/balticSeaCyanobacteria.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material'

function Page62() {

    return(

        <motion.div className = 'page62'
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
                    <h2 style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'justify'}}>The Oceans are affected by Global Warming just as every other part of the planet, so all actions that help us to stop the Global Warming are really useful.</h2>
                    <h2 style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'justify'}}> What are those actions?</h2>    
                </motion.div>
                <motion.div
                initial={{x: '-105vw'}}
                animate={{x: '5vw'}}
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'0vh', width:'45vw'}}
                >   
                        <h1 style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'justify'}}>Simple things like recycling and reducing your carbon footprint through some habits changes like trying to use less electricity, utilize public transport and not waste water and food resources are really important.</h1>
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '-5vh'}}>
                            
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', top:'-10vh', left: '77vw'}}>
                                <Link to='../page61'>
                                    <Button>Previous</Button>
                                </Link> 
                                <Link to='../page63'>
                                    <Button>Next</Button>
                                </Link>
                            </ButtonGroup>
        
                            
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Page62;   