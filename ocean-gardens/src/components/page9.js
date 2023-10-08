import React from 'react';
import '../styles/page9.css'
import image2 from "../resources/phytoplankton/diatomaceas.webp" 
import image1 from "../resources/phytoplankton/microalga.jpeg"
import image3 from "../resources/phytoplankton/eugenoid.jpeg"
import image4 from "../resources/phytoplankton/cyanophite.jpeg"
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import CarouselComp from './CarouselPage';

function Page9() {

  const navigate = useNavigate()

  const navigateNext = () => {
    navigate("/topic5page1")
  }

  const navigatePrevious = () => {
    navigate("globesPage")
  }

  return (
    <div id="page9">
      <h1>But how does Phytoplankton looks like? How small are they?</h1>
      <h2>Subtítulo</h2>
      <p>They are composed of two groups of living beings, the first are organisms present in the Protozoa Kingdom like seaweeds and euglenoids, and the second are organisms called cyanophytes that are classified as Bacterias.
But do not think that they are this simple… The variety of species, shapes, sizes and structures is huge.
      </p>
      
      <div className="image-row">
        <div className="image-and-subtitle">
          <img src={image1} className="image-div" alt="Image 1" />
          <p style={{textAlign: "center"}}>Example of micro-seaweed seem by the microscope</p>
        </div>
        <div  className="image-and-subtitle">
          <img src={image4  } className="image-div" alt="Image 2" />
          <p style={{textAlign: "center"}}>Example of spiral Cyanophyte seem by the microscope</p>
        </div>
        <div  className="image-and-subtitle">
          <img src={image3} className="image-div" alt="Image 3" />
          <p style={{textAlign: "center"}}>Example of Eugenoid seem by the microscope</p>
        </div>
        
      </div>

      <p>They differ, especially in terms of size, ranging from 2µm up to 200µm. For clarification, µm (micro-meter) is a unit of measure equivalent of a milionth of a meter. For comparison, the diameter of a strand of hair is about 60-140 µm.
          They can be classified as:
          </p>

      <div className="paragraph-image-row">
        
        <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', flexDirection: 'column'}}>
          <ul style={{height: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column'}}>
            <li style={{fontSize: '1.5rem', textAlign:"justify"}}>Picoplâncton: has size less than 2 µm</li>
            <li style={{fontSize: '1.5rem', textAlign:"justify"}}>Nanoplâncton: has size between 2µm and 20µm</li>
            <li style={{fontSize: '1.5rem', textAlign:"justify"}}>Microplâncton: has size between 20µm and 200µm</li>
            <li style={{fontSize: '1.5rem', textAlign:"justify"}}>Mesoplâncton: has size between 200µm and 2000µm</li>
          </ul>
          <p>We can compare such differences in size, in proportion, with the difference between the size of a tree and a single piece of grass, or the size difference between a human being and an insect. 
          </p>
        </div>

        <div className='side-image-div'>
          <img src={image2} style={{width: '100%', height: '100%'}}></img>
        </div>
      </div>
      <p>
          This has a grand impact on the quantity of individuals in the water, their concentration and the amount of oxygen they produce through photosynthesis. For example, in a lenght of 400µm we can fit 200 nanoplâncton of 2µm, but only 2 microplâncton of 200µm of length. Studies point out that the nanoplânctons are responsible for most of the oxygen production and carbon fixation!
      </p>
      <CarouselComp/>
      <p>To sum up, they are responsible for producing massive amounts of oxygen, filtering light penetration in the ocean and fixating tons of CO2 that would otherwise be at the atmosphere. They are also the base of the food chain - serving as food to many animals. Therefore, they are responsible for maintaining the whole maritime ecosystem balanced, and, by consequence, also the whole Earth ecosystem as we know. But have you ever imagined an Earth without the phytoplanktons? How would it be?</p>
      <div style={{textAlign:"right"}}>
        <ButtonGroup variant="contained">
          <Button onClick={navigatePrevious}>Previous</Button>
          <Button onClick={navigateNext}>Next</Button>
        </ButtonGroup>
      </div>    
    </div>
  );
}

export default Page9;
