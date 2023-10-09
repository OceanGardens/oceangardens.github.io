import React, { useEffect, useState } from 'react';
import '../styles/transmissionPage.css';
import MatrixRain from './matrixRain';
import Image from '../resources/wallpaper/wallpaper.jpg'
import {useLinkClickHandler, Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { Howl, Howler } from 'howler';
import soundSrc from '../resources/deepOcean.mp3'
import ButtonSound from '../resources/click.mp3'
var buttonSound = new Howl({
    src: [ButtonSound]
  })
  
function TransmissionPage(props) {
  const [msg1, setMsg1] = useState('');
  const [msg2, setMsg2] = useState('');
  const [msg3, setMsg3] = useState('');
  const [msg4, setMsg4] = useState('');
  const [msg5, setMsg5] = useState('');
  const [msg6, setMsg6] = useState('');
  const [msg7, setMsg7] = useState('');
  const [msg8, setMsg8] = useState('');
  const [msg9, setMsg9] = useState('');
  const [stage2, setStage] = useState(0);
  const [decoding, setDecode] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(true)
  var sound = new Howl({
    src: [soundSrc],
    loop: true
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
    props.setClicks(props.clicks+1)
    
    if(stage2===1){
      //Send second messa
      
      setStage(stage2+1)
      setDecode(true)
      setMsg1('')
      setMsg2('')
      setMsg3('')
      setTimeout(()=>setButtonHeight(false), 9500);
      //Mudar para estilo carta no canto da tela, ajustar espaçamento para não ficar estranho
      
      var messenger4 = new Messenger("Dear inhabitants of TRAPPIST-1 planetary system,", setMsg4, 0);
      var messenger5 = new Messenger("Greetings from Earth!", setMsg5, 1500);
      var messenger6 = new Messenger("We are sending this transmission as a gift to you,", setMsg6, 3000);
      var messenger7 = new Messenger("our cosmic neighbors,", setMsg7, 4500);
      var messenger8 = new Messenger("so you can experience the beauty of our greatest garden: the oceans.", setMsg8, 6000);
      var messenger9 = new Messenger("Click on the screen to start", setMsg9, 7500);
      return
    }else{
      
      //HELP HERE
      document.removeEventListener('mousedown', handleClickOutsideRef);  
      return ;
    }
    
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideRef);
    if(props.clicks == 0 && stage2 == 0){
    var messenger1 = new Messenger("Receiving new radio transmission...", setMsg1, 1500);

    var messenger2 = new Messenger("Distance from source: 39.46 light years", setMsg2, 3500);

    const messenger3 = new Messenger("Click on the screen to decode...", setMsg3, 5500);
    setTimeout(()=>setStage(stage2+1), 7500);
    }
    return () =>{
      document.removeEventListener('mousedown', handleClickOutsideRef)
    }
    
  }, [stage2, setStage, decoding, setDecode, props.clicks]); // Empty dependency array to run the effect once on component mount
  
  return (
    <div id="transmissionBody">
      <motion.div className="transmissionPage"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        
        <MatrixRain/>
        <Link to='landingPage'>
            <button onClick={()=>{sound.play(); buttonSound.play()}} id = 'button' style={{zIndex: '1000', opacity: '0%', width: buttonHeight? "0%":"100%", height: buttonHeight ? '0px': '100vh'}}>troca</button>
            </Link>
        
        <p id='message1'>{msg1}</p>
        <p id='message2'>{msg2}</p>
        <p id='message3'>{msg3}</p>
        <p id='message4'>{msg4}</p>
        <div id='mail'>
          <p id='message5'>{msg5}</p>
          <p id='message6'>{msg6}</p>
          <p id='message7'>{msg7}</p>
          <p id='message8'>{msg8}</p>
          <p id='message9'>{msg9}</p>
        </div>
        
      </motion.div>
    </div>
  );
}

export default TransmissionPage;