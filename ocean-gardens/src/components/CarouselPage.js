import React , {useState, useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography, ButtonGroup } from '@mui/material'
import '../styles/CarouselPage.css'
import diatomaceas from '../resources/phytoplankton/diatomaceas.webp'
import dinoflagelados from '../resources/phytoplankton/dinoflagelados.webp'
import singlediatomacea from '../resources/phytoplankton/singlediatomacea.jpg'
import synedra from '../resources/phytoplankton/synedra.jpg'
import synura from '../resources/phytoplankton/synura.jpg'

function CarouselPage(props) {
    var items = [
        {
          name: "Diatomaceas",
          description: "Meet the Diatomaceas, the tiny but amazing phytoplankton! They are like little jewels in the ocean, making the sea sparkle with their beauty.",
          imageUrl: diatomaceas,
        },
        {
          name: "Dinoflagelados",
          description: "Say hello to the Dinoflagelados! These playful phytoplankton light up the water like fireflies, making the ocean a magical place to explore.",
          imageUrl: dinoflagelados,
        },
        {
          name: "Single Diatomacea",
          description: "Meet the Single Diatomacea, a tiny superhero of the sea! Despite their size, they play a big role in keeping the ocean healthy and full of life.",
          imageUrl: singlediatomacea,
        },
        {
          name: "Synedra",
          description: "Say hi to Synedra, the friendly phytoplankton with a unique shape! They are like nature's artwork, adding a special touch to the underwater world.",
          imageUrl: synedra,
        },
        {
          name: "Synura",
          description: "Meet Synura, the tiny dancer of the ocean! These phytoplankton move gracefully in the water, creating a mesmerizing show for everyone to enjoy.",
          imageUrl: synura,
        }
      ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [currentItem, setCurrentItem] = useState(items[0]);
    useEffect(() => {
        // Update the current item when the activeIndex changes
        setCurrentItem(items[activeIndex]);
      }, [activeIndex, items]);
    
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
        handleNext();
        } else if (e.key === 'ArrowLeft') {
        handlePrev();
        }
    };

    const renderText = () => {
        return (
          <Paper> 
            <Typography variant="h4" className="phyto-name">
              {currentItem.name}
            </Typography>
            <Typography className="phyto-desc">{currentItem.description}</Typography>
          </Paper>
        );
      };
    
      
  
    return (
        <div id="carousel-naim" onKeyDown={handleKeyDown} tabIndex={0}>
            <div className="phytoplankton-container">
            <Typography variant="h4" className="phytoplankton-title" gutterBottom>
                The World of Phytoplankton
            </Typography>
            <Typography variant="body1" className="phytoplankton-paragraph" paragraph>
                Phytoplankton are microscopic, plant-like organisms that play a crucial role in the Earth's oceans. Despite their small size, they are the foundation of marine ecosystems, serving as the primary producers of organic matter through photosynthesis.
            </Typography>
            <ButtonGroup variant="contained" style={{display:'flex', top: '20%', position: 'absolute', right: '0vw'}}>
                <Button href="./carousel">Previous</Button>
                <Button href="./carousel">Next</Button>
            </ButtonGroup>
            </div>
            <Carousel
                className = "carousel-container"
                animation="false"
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                index={activeIndex}
                onChange={(index) => setActiveIndex(index)}    
                style={{ width: '70%', margin: 'auto' }}
                height={'600px'}
                >
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                    ))}
            </Carousel>
            <div className="carousel-naim-text">
                {renderText()}
            </div>
      </div>
    );
  }
  
  function Item(props) {
    return (
      <Paper className="carousel-item"
        elevation={10}
      >
        <img src={props.item.imageUrl}
          alt={props.item.name}
          className="carousel-image"
          />
      </Paper>
    );
  }
  
  export default CarouselPage;