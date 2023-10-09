import React , {useState, useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography, ButtonGroup } from '@mui/material'
import '../styles/CarouselPage.css'
import diatomaceas from '../resources/phytoplankton/diatomaceas.webp'
import dinoflagelados from '../resources/phytoplankton/dinoflagelados.webp'
import singlediatomacea from '../resources/phytoplankton/singlediatomacea.jpg'
import synedra from '../resources/phytoplankton/synedra.jpg'
import synura from '../resources/phytoplankton/synura.jpg'
import { Link } from 'react-router-dom';

function CarouselComp(props) {
    var items = [
        {
          name: "Dinoflagellates",
          description: "Say hello to the dinoflagellates! They constitute a group of single celled organisms, with lots of different species. Some of them are bioluminescent, meaning they can produce light! ",
          imageUrl: dinoflagelados,
        },
        {
          name: "Synura",
          description: "Synura is a freshwater algae group. They form spherical colonies of about 30-100 micrometers in diameter, with cells that have outward-facing flagella, and they tend to aggregate into clusters.",
          imageUrl: synura,
        },
        {
          name: "Diatom Group",
          description: "The Diatom is a group of various species, some of which you can see here. They come in various forms and shapes, but they are all crucial to life. Which one is your favorite?",
          imageUrl: diatomaceas,
        },
        {
          name: "Centric Diatom",
          description: "This is a single celled type of Diatom. As you can see in the scale of 30 micrometers, they are really small. Can you figure out the diameter of this one?",
          imageUrl: singlediatomacea,
        },
        {
          name: "Synedra",
          description: "Synedra is a genus of diatoms, with needle-like cells that can exist singly or radiate in colonies.",
          imageUrl: synedra,
        },
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
          <div id="carouselDescription"> 
            <Typography className="phyto-name">
              {currentItem.name}
            </Typography>
            <Typography className="phyto-desc">{currentItem.description}</Typography>
          </div>
        );
      };
  
    return (
        <div id="carousel-naim" onKeyDown={handleKeyDown} tabIndex={0} >
            <Carousel
                className = "carousel-container"
                animation="false"
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                index={activeIndex}
                onChange={(index) => setActiveIndex(index)}    
                style={{ width: '70%', margin: 'auto'}}
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
  
  export default CarouselComp;