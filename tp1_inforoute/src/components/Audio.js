// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {faPause} from '@fortawesome/free-solid-svg-icons';


/**
 * Is a audio button component.
 * It read mp3 file when press.
 */
class AudioTest extends React.Component {

  constructor(props) {
    super();
    this.state = {
      path: 'classAnimal',
      name: 'Pourse',
      icon: faPlay
    };
    this.isPlaying = false;
    this.audio = new Audio();
  }

  // Play the link mp3 file.
  playAudio = () => {
    let p = this.props.path.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    let n = this.props.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const sound = require(`./../audio/${p}/${n}.mp3`);
    
    this.audio.src = sound;
    if(!this.isPlaying){
      this.toggleAudioIcon();
      this.audio.onended = () =>{
        this.toggleAudioIcon();
      };
      this.audio.play();
      console.log("play");
    }else{
      this.audio.pause();
      this.isPlaying = false;
      this.setState({icon : faPlay});
    }
  }

  // Toggle play and pause.
  toggleAudioIcon(){
    this.isPlaying = !this.isPlaying;
    this.setState({icon : this.isPlaying ? faPause : faPlay});
  }

  onClick() {
    this.playAudio()
  }

  // Return the button.
  render() {
    return (
      <>
        <Button className="btn-secondary" onClick={this.onClick.bind(this)}>
            <FontAwesomeIcon  icon={this.state.icon} id={this.state.path + "/" + this.state.name} ></FontAwesomeIcon>
        </Button>
      </>
    );
  }
}

export default AudioTest;