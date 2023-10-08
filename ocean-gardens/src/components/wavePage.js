import React, { useState }from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import '../styles/wavePage.css';
import { useNavigate } from 'react-router-dom';
import { Howl, Howler } from 'howler';
import ButtonSound from '../resources/click.mp3'
var buttonSound = new Howl({
    src: [ButtonSound]
  })
  
function WavePage() {

  const [i, seti] = useState(0);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/InitialGlobePage'); // Replace '/' with the desired route
  };

  const navigateToNext = () => {
    navigate('/page3')
  }

  const texts = [
    {
      "upperText": "Even though the oceans cover 70% of Earth's surface, it is estimated that we humans have only explored 20% of them. From shallow waters full of marine life to deep underwater valleys ranging up to 10,935 meters (35,876 feet) in depth, humanity has still much to learn about them. ",
      "lowerText": "For a comparison, the number of people that have already been to space is more than 10 times bigger than the number of people who have visited Challenger Deep, the lowest point of the seabed. "
    },
    {
      "upperText": "Even if we still have much to learn, we already know that the oceans play a crucial role in many aspects of our daily lives - even for those who live far from the shores. From our oceans, we obtain a significant amount of food and materials such as salt, sand and oil.",
      "lowerText": "Moreover, we strongly rely on them for transporting both people and goods worldwide, especially considering the current state of globalized trade. Around costal areas, millions of people have fishing and ocean-related tourism as their main source of income."
    },
    {
      "upperText": "But that's not all! Our oceans are home to a wide array of life, including animals, bacteria, plants, and protozoans. This diverse range of living beings constitutes vast aquatic ecosystems. The interactions within those ecosystems have far-reaching benefits, impacting not only the oceans but also the land.",
      "lowerText": "For example, coral reefs and mangrove swamps are essential for protecting coastal areas from the erosion caused by waves. These last also contribute to control the Greenhouse Effect by stocking carbon from the atmosfere in their tissues and in the sediments trapped around their roots."
    },
    {
      "upperText": "Animals such as mussels also play a key role in filtering the water, contributing to provide us clean beaches and clear waters, as they feed from impurities. Other creatures, like sponges and algae, have important applications in the production of medicines.",
      "lowerText": "To understand a little more about the importance of the oceans and their ecosystems, we should first mention one of the most important resource for Earth's lifeforms: Oxygen!"
    }
  ]

  const next = () => {
    buttonSound.play()
    if (i < texts.length - 1) {
      seti(i + 1);
    } else {
      navigateToNext();
    }
    
  }

  const previous = () => {
    buttonSound.play()
    if (i > 0) {
      seti(i - 1);
    } else {
      navigateToHome();
    }
  }

  const upperText = texts[i].upperText;
  const lowerText = texts[i].lowerText;

  return (
    <div id="wavePage">
      <div className="header">
        <div className="inner-header">
          <h1 style={{fontSize: '3.5vh'}}>{upperText}</h1>
        </div>
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(15, 16, 88, 0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(15, 16, 88, 0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(15, 16, 88, 0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(15, 16, 88, 1)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="content">
        <div id="lowerTextDiv">
          <h1 style={{fontSize: '3.5vh'}}>{lowerText}</h1>
          <ButtonGroup id="buttonGroup" variant="outlined">
            <Button onClick={previous}>Previous</Button>
            <Button onClick={next}>Next</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default WavePage;