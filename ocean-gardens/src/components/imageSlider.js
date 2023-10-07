import React from 'react';
import Draggable from 'react-draggable';
import Image1 from "../resources/wallpaper/wallpaper.jpg"
import Image2 from "../resources/wallpaper/wallpaperMed.jpg"
import "../styles/imageSlider.css"

class ImageSlider extends React.Component {

  getBackgroundImage=(x)=>{
    if (x < 500) {
      return Image1
    }
    else {
      return Image2
    }
  }

  render() {
    let width = window.screen.width;

    return (
      <div>
        <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: width / 2, y: 0}}
          position={null}
          grid={[10, 100]}
          scale={1}
          bounds= {{left:0, top:0, bottom:0, right:width}}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div>
            <div className="handle">Drag from here</div>
          </div>
        </Draggable>
        {/* <img src={Image1} style={{position:"absolute", top:"0px", zIndex:"-100"}}>
        </img> */}
      </div>
    );
  }
}

export default ImageSlider;
