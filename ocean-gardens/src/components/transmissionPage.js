import React, { useEffect, useState } from 'react';
import '../styles/transmissionPage.css';
import MatrixRain from './matrixRain';


function TransmissionPage(props) {
  const [msg1, setMsg1] = useState('');
  const [msg2, setMsg2] = useState('');
  const [msg3, setMsg3] = useState('');
  const [msg4, setMsg4] = useState('');
  const [msg5, setMsg5] = useState('');
  const [msg6, setMsg6] = useState('');
  const [msg7, setMsg7] = useState('');
  const [msg8, setMsg8] = useState('');
  const [stage2, setStage] = useState(true)

  const Messenger = function (writeMsg, setter, timewait) {
    const m = this;

    m.init = function (writeMsg, setter, timewait) {
      m.codeletters = "&#*+%?£@§$";
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
      // setter('');

      // setTimeout(m.animateIn, 200);
    };
    m.init(writeMsg, setter, timewait);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    if(props.clicks == 0){
    var messenger1 = new Messenger("Receiving new radio transmission...", setMsg1, 2000);

    var messenger2 = new Messenger("Distance from source: 4.3 light years", setMsg2, 6500);

    var messenger3 = new Messenger("Click on the screen to decode...", setMsg3, 10000);}
    

    function handleClickOutside(){
        
        if(props.clicks == 0){
          setStage(false)
          props.setClicks(props.clicks+1)
          setMsg1('')
          setMsg2('')
          setMsg3('')
          

          //Mudar para estilo carta no canto da tela, ajustar espaçamento para não ficar estranho

          var messenger4 = new Messenger("Dear Alpha Centaurians,", setMsg4, 0);
          var messenger5 = new Messenger("Greetings from Earth!", setMsg5, 2500);
          var messenger6 = new Messenger("We are sending this to you, our cosmic neighbors, so you can ", setMsg6, 5000);
          var messenger7 = new Messenger("experience the beauty of our greatest garden: The Oceans", setMsg7, 7500);
          var messenger8 = new Messenger("Click on the screen to start", setMsg8, 9000);
          
        }else{
          
          props.setLandingPage(true)
          console.log("não remova esse comentário ele quebra o código")
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
          
        }
        
    }
    
  }, [stage2, setStage, props.clicks]); // Empty dependency array to run the effect once on component mount

  return (
    <>
      <MatrixRain/>
      <p id='messenger1'>{msg1}</p>
      <p id='messenger2'>{msg2}</p>
      <p id='messenger3'>{msg3}</p>
      <p id='messenger4'>{msg4}</p>
      <p id='messenger5'>{msg5}</p>
      <p id='messenger6'>{msg6}</p>
      <p id='messenger7'>{msg7}</p>
      <p id='messenger8'>{msg8}</p>
    </>
  );
}

export default TransmissionPage;