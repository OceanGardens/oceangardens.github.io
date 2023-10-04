import React from 'react';
import { Howl, Howler } from 'howler';

class SoundPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.sound = new Howl({
      src: ["../resources/waveSound.mp3"],
    });
  }

  playSound = () => {
    this.sound.play();
  }

  render() {
    return (
      <div>
        <button onClick={this.playSound}>Play Sound</button>
      </div>
    );
  }
}

export default SoundPlayer;
