import "../styles/minigamePage.css"
import { Unity, useUnityContext } from "react-unity-webgl";
import React, { useEffect, useState } from 'react';
import {ButtonGroup, Button} from '@mui/material'

function MinigamePage() {
    
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "build/GAME.loader.js",
        dataUrl: "build/GAME.data",
        frameworkUrl: "build/GAME.framework.js",
        codeUrl: "build/GAME.wasm",
    });
    
    // We'll use a state to store the device pixel ratio.
    const [devicePixelRatio, setDevicePixelRatio] = useState(
        window.devicePixelRatio
    );

    useEffect(
        function () {
          // A function which will update the device pixel ratio of the Unity
          // Application to match the device pixel ratio of the browser.
          const updateDevicePixelRatio = function () {
            setDevicePixelRatio(window.devicePixelRatio);
          };
          // A media matcher which watches for changes in the device pixel ratio.
          const mediaMatcher = window.matchMedia(
            `screen and (resolution: ${devicePixelRatio}dppx)`
          );
          // Adding an event listener to the media matcher which will update the
          // device pixel ratio of the Unity Application when the device pixel
          // ratio changes.
          mediaMatcher.addEventListener("change", updateDevicePixelRatio);
          return function () {
            // Removing the event listener when the component unmounts.
            mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
          };
        },
        [devicePixelRatio]
    );

    return(
            <div style = {{ width: '100%', height: '100%',background: '#000000',position: 'absolute', alignSelf: 'center' }}>
              <div style = {{background: '#000000', width : '76%',  position: 'absolute', alignSelf: 'center',left: '12%', right:'12%',  top : '10%', bottom: '10%' ,
            alignItems: 'center',display: 'flex'}}>
                <Unity 
                unityProvider={unityProvider}
                devicePixelRatio={devicePixelRatio}
                style = {{ width : '100%', margin: '0' }}
          
                />
                
            
              </div>
              <ButtonGroup variant = 'contained' style={{position: 'absolute', right:'2vw', bottom: '5vh', alignSelf: 'end'}}>
              <Button>Previous</Button>
              <Button>Next</Button>
            </ButtonGroup>
            
            
            </div>
    )

}

export default MinigamePage;