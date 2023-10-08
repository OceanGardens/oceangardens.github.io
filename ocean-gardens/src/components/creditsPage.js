import React, { useEffect, useState } from 'react';
import '../styles/creditsPage.css';
import MatrixRain from './matrixRain';
import Image from '../resources/wallpaper/wallpaper.jpg'
import {useLinkClickHandler, Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { Howl, Howler } from 'howler';
import soundSrc from '../resources/waveSound.mp3'
import BOTAO from '../resources/sample-3s.mp3'

function CreditsPage(props) {
  const [msg1, setMsg1] = useState('');
  const [msg2, setMsg2] = useState('');
  const [msg3, setMsg3] = useState('');
  const [msg4, setMsg4] = useState('');
  const [msg5, setMsg5] = useState('');
  const [msg6, setMsg6] = useState('');
  const [msg7, setMsg7] = useState('');
  const [msg8, setMsg8] = useState('');
  const [msg9, setMsg9] = useState('');
  const [msg10, setMsg10] = useState('');
  const [msg11, setMsg11] = useState('');
  const [stage2, setStage] = useState(0);
  const [decoding, setDecode] = useState(true);
  const [buttonHeight, setButtonHeight] = useState(true)
  var sound = new Howl({
    src: [soundSrc],
    loop: true
  })
  var buttonSound = new Howl({
    src: [BOTAO]
  })
  const Messenger = function (writeMsg, setter, timewait) {
    const m = this;
    if(stage2>1){
      return
    }
    m.init = function (writeMsg, setter, timewait) {
      m.codeletters = "-'*+%?.>!$";
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [writeMsg];

      setTimeout(m.animateIn, 1000 + timewait);
    };

    m.generateRandomString = function (length) {
      var random_text = '';
      while (random_text.length < length) {
        random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
      }

      return random_text;
    };

    m.animateIn = function () {
      if (m.current_length < m.messages[m.message].length) {
        m.current_length = m.current_length + 2;
        if (m.current_length > m.messages[m.message].length) {
          m.current_length = m.messages[m.message].length;
        }

        var message = m.generateRandomString(m.current_length);
        setter(message);

        setTimeout(m.animateIn, 25);
      } else {
        setTimeout(m.animateFadeBuffer, 25);
      }
    };

    m.animateFadeBuffer = function () {
      if (m.fadeBuffer === false) {
        m.fadeBuffer = [];
        for (var i = 0; i < m.messages[m.message].length; i++) {
          m.fadeBuffer.push({ c: Math.floor(Math.random() * 12) + 1, l: m.messages[m.message].charAt(i) });
        }
      }

      var do_cycles = false;
      var message = '';

      for (var i = 0; i < m.fadeBuffer.length; i++) {
        var fader = m.fadeBuffer[i];
        if (fader.c > 0) {
          do_cycles = true;
          fader.c--;
          message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
        } else {
          message += fader.l;
        }
      }

      setter(message);

      if (do_cycles === true) {
        setTimeout(m.animateFadeBuffer, 30);
      } else {
        setTimeout(m.cycleText, 2000);
      }
    };

    m.cycleText = function () {
      m.message = m.message + 1;
      if (m.message >= m.messages.length) {
        m.message = 0;
      }

      m.current_length = 0;
      m.fadeBuffer = false;
    };
    m.init(writeMsg, setter, timewait);
  };

  const handleClickOutsideRef = (event) => {
    
    if(stage2===1){
      //Send second messa
      
      setStage(stage2+1)
      setDecode(true)
      setMsg1('')
      setMsg2('')
      setMsg3('')
      setTimeout(()=>setButtonHeight(false), 5600);
      //Mudar para estilo carta no canto da tela, ajustar espaçamento para não ficar estranho
      
      var messenger4 = new Messenger("Made by Students at UNICAMP:", setMsg4, 0);
      var messenger5 = new Messenger("Andreas Cisi", setMsg5, 0);
      var messenger6 = new Messenger("Bernardo Archegas", setMsg6, 600);
      var messenger7 = new Messenger("Bruno Freitas", setMsg7, 1200);
      var messenger8 = new Messenger("Daniel Hosomi", setMsg8, 1800);
      var messenger9 = new Messenger("Felipe Brabes", setMsg9, 2400); 
      var messenger10 = new Messenger("Naim Shaikhzadeh", setMsg10, 3000);
      var messenger11 = new Messenger("Click on the screen to restart the journey...", setMsg11, 3600);
      return
    }else{
      
      //HELP HERE
      document.removeEventListener('mousedown', handleClickOutsideRef);  
      return ;
    }
    
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideRef);
    if(stage2 == 0){
    var messenger1 = new Messenger("We hope you enjoyed our transmission", setMsg1, 1000);

    var messenger2 = new Messenger("This was our submission to NASA Space Apps 2023", setMsg2, 2500);

    const messenger3 = new Messenger("Click on the screen to continue...", setMsg3, 4000);
    setTimeout(()=>setStage(stage2+1), 6000);
    }
    return () =>{
      document.removeEventListener('mousedown', handleClickOutsideRef)
    }
    
  }, [stage2, setStage, decoding, setDecode, props.clicks]); // Empty dependency array to run the effect once on component mount
  
  return (
    <>
      <motion.div className="creditsPage"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        
        <MatrixRain/>
        <Link to='../landingPage'>
            <button onClick={()=>{sound.play(); buttonSound.play()}} id = 'button' style={{zIndex: '1000', opacity: '0%', width: buttonHeight? "0%":"100%", height: buttonHeight ? '0px': '100vh'}}>troca</button>
            </Link>
        
        <p id='messenger1'>{msg1}</p>
        <p id='messenger2'>{msg2}</p>
        <p id='messenger3'>{msg3}</p>
        <p id='messenger4'>{msg4}</p>
        <div id='mail'>
          <p id='messenger5'>{msg5}</p>
          <p id='messenger6'>{msg6}</p>
          <p id='messenger7'>{msg7}</p>
          <p id='messenger8'>{msg8}</p>
          <p id='messenger9'>{msg9}</p>
          <p id='messenger10'>{msg10}</p>
          <p id='messenger11'>{msg11}</p>
        </div>
        
      </motion.div>
    </>
  );
}

export default CreditsPage;