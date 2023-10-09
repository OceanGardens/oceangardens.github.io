import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from '../resources/nasa/goodImages/tasmanSea.jpg'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material';
import Plot from 'react-plotly.js';
import { Howl, Howler } from 'howler';
import ButtonSound from '../resources/click.mp3'
var buttonSound = new Howl({
    src: [ButtonSound]
  })
  
function Page6() {

    return(

        <motion.div className = 'page8'
        initial={{width: 0}}
        animate={{width: '100%'}}
        transition={{duration: 0.5}}
        exit={{x:window.innerWidth}}>
            <img src = {Image} style={{position:'absolute', top:'0vh', width:'100%', maxHeight:"100vh", zIndex:"-100"}}>     
            </img>
            <div style={{position:'absolute', top:'0vh', width:'100%', maxHeight:"100vh"}}>
                <motion.div
                initial={{x: '150vw'}}
                animate={{x: '5vw'}}
                transition={{duration: 1.2, ease: 'circOut'}}
                style={{position: 'relative', top:'5vh', left: '0vw', width: '90vw', height:'50vh'}}
                >
                    <h1 style={{position:'absolute', left: '50vw', textAlign: 'right', color:'white', fontSize: '2.2vw'}}>In reality, the primary agents are a group of microorganisms known as phytoplankton, consisting of microalgae and specific bacteria. These organisms predominantly live in aquatic environments, especially in the oceans.</h1>
                    <Plot
                        data = {[{
                            values: [28, 2, 70],
                            labels: ['Land Plants', 'Other Fonts', 'Ocean Plants'],
                            type: 'pie',
                            marker: {
                                colors: ['rgba(100,50,50,1)', 'rgba(50,100,50,1)', 'rgba(50,0,100, 1)']
                            }
                            }
                        ]}
                        layout = {{
                            title: 'Oxygen Production',
                            font: {
                                color: 'white'
                            },
                            height: 350,
                            width: 500,
                            paper_bgcolor: 'rgba(0, 0, 0, 0)', // Transparent paper background
                            plot_bgcolor: 'rgba(0, 0, 0, 0)', // Transparent plot background
                            legend:{
                                traceorder: 'normal',
                                itemsizing: 'constant'
                            }
                        }}
                        style= {{maxHeight: '20vh'}}
                    />
                
                </motion.div>
                <motion.div
                initial={{x: '-105vw'}}
                animate={{x: '5vw'}}
                transition={{duration: 1.2, ease: 'circOut', delay:1.5}}
                style={{position: 'relative', top:'5vh', width:'45vw'}}
                >   
                        <h1 style={{position:'relative', color:'#fff', fontSize: '2.2vw', textAlign:'justify'}}>Because of that, you can think of our oceans as massive gardens. It is those beautiful painting-like gardens that you are seeing in the background of these pages, as seen by NASA satellites.</h1>
                        
                        <div style={{position: 'relative', marginLeft: 'auto', marginRight: '0', bottom: '-5vh'}}>
                            
                            <ButtonGroup variant="contained" style={{display:'flex', position: 'absolute', top:'-11vh', left: '77vw'}}>
                                <Link to='../page7'>
                                    <Button onClick={() => buttonSound.play()}>Previous</Button>
                                </Link> 
                                <Link to='../page81'>
                                    <Button onClick={() => buttonSound.play()}>Next</Button>
                                </Link>
                            </ButtonGroup>
        
                            
                        </div>
        
                </motion.div>
            </div>
        </motion.div>
        
    )
}

export default Page6;   