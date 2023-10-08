import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/northernBeringSea.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material';
import Plot from 'react-plotly.js';

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
                    <h1 style={{position:'relative', textAlign: 'justify', color:'white', fontSize: '4.5vh'}}>Moreover, oxygen gas plays a vital role in various aspects of human civilization, such as the combustion process, which is crucial for cooking, illumination, and industrial production.</h1>
                  
                </motion.div>
                <motion.div
                initial={{right: '-200vw'}}
                animate={{right: '-10vw'}}
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'-6vh', width:'85vw'}}
                >   
                        <div style={{position:'relative'}}>
                            <Plot
                                
                                data = {[{
                                values: [78, 21, 1],
                                labels: ['Nitrogen', 'Oxygen', 'Others' ],
                                type: 'pie',
                                marker: {
                                    colors: ['rgba(100,50,50,1)', 'rgba(50,100,50,1)', 'rgba(50,0,100, 1)']
                                }
                                }
                                ]}
                                layout = {{
                                    title: 'Atmosphere Composition',
                                    font: {
                                        color: 'white'
                                    },
                                    height: 400,
                                    width: 600,
                                    paper_bgcolor: 'rgba(0, 0, 0, 0)', // Transparent paper background
                                    plot_bgcolor: 'rgba(0, 0, 0, 0)', // Transparent plot background
                                    legend:{
                                        traceorder: 'normal',
                                        itemsizing: 'constant'
                                    }
                                }}
                            />
                        
                            <h1 style={{position:'absolute', top: '0vh', left: '50vw', color:'#fff', fontSize: '4.5vh', textAlign:'justify'}}>Currently, Earth's atmosphere is composed of 78% nitrogen, 21% oxygen, and 1% other gases and water vapor.</h1>
                            <div style={{position:'absolute', right: '0vw', bottom: '5vh', marginLeft: 'auto', marginRight: '0'}}>
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', right: '0vh'}}>
                                <Link to='../page4'>
                                    <Button>Previous</Button>
                                </Link> 

                                <Link to='../page6'>
                                    <Button>Next</Button>
                                </Link>
                            </ButtonGroup>
                            </div>
                        
                        </div>        
                        
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Page5;   