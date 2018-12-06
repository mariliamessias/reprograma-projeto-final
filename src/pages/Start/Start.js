import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer'
import Box from '../../components/Box/Box'
import YouTube from 'react-youtube';
import './Start.css';
import './Start.scss'

class Inicio extends Component {
  
  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.mute();
  }
  
  _onEnd(event) {
    event.target.playVideo();
  }
  
  render() {

    const videoOptions = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    };

    return (
      <div>
      <div className="inicio">
        
        <section className="secao1">
            <Box className="box1"></Box>
            <Box className = "box2"></Box>
            <Box className = "box3"></Box>
            <Box className = "box4"></Box>
            <Box className = "box5"></Box>
            <Box className = "box6"></Box>
          </section>
          <Footer></Footer>
        </div>

          <div className="video-fundo">
            <div className="video-foreground">
              <YouTube
                videoId="efvCgbIeMB0"
                opts={videoOptions}
                className="video-iframe"
                onReady={this._onReady}
                onEnd={this._onEnd}
              />
            </div>
        </div>

        </div>
          );
        }
}

export default Inicio;
