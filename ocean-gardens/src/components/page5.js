import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/northernBeringSea.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material'

function Page5() {

    return(

        <motion.div className = 'page5'
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
                    <h1 style={{position:'relative', textAlign: 'justify', color:'white', fontSize: '4.5vh'}}>It is due to this molecule that we and other living beings can live, because we use this gas to produce energy that keeps our body working!</h1>
                  
                </motion.div>
                <motion.div
                initial={{right: '-200vw'}}
                animate={{right: '-50vw'}}
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'-6vh', width:'45vw'}}
                >   
                        <h1 style={{position:'relative', color:'#fff', fontSize: '4.5vh', textAlign:'justify'}}>Besides that, oxygen gas is present in other areas of our lives like the combustion process that is super important for cooking, illumination and industrial production.</h1>
                        
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '-5vh'}}>
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', right: '0vh'}}>
                                <Link to='../page4'>
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

export default Page5;   