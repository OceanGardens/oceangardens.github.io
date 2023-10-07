import React, { useState }from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import '../styles/wavePage.css';

function WavePage() {

  const [i, seti] = useState(0);

  const texts = [
    {
      "upperText": "Texto 1",
      "lowerText": "Texto 2"
    },
    {
      "upperText": "Texto 3",
      "lowerText": "Texto 4"
    },
    {
      "upperText": "Texto 5",
      "lowerText": "Texto 6"
    },
    {
      "upperText": "Texto 7",
      "lowerText": "Texto 8"
    }
  ]

  const next = () => {
    if (i < texts.length - 1) {
      seti(i + 1);
    } else {
      
    }
    
  }

  const previous = () => {
    if (i > 0) {
      seti(i - 1);
    } else {
      
    }
  }

  const upperText = texts[i].upperText;
  const lowerText = texts[i].lowerText;

  return (
    <div className="page">
      <div className="header">
        <div className="inner-header">
          <h1>{upperText}</h1>
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
        <h1>{lowerText}</h1>
        <ButtonGroup id="buttonGroup" variant="outlined">
          <Button onClick={previous}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default WavePage;