import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer'
import Box from '../../components/Box/Box'
import YouTube from 'react-youtube';
import './Start.css';
import './Start.scss'

class Inicio extends Component {
    
  render() {

    return (
      <div>
      <div className="inicio">
        <section className="secao1">
            <Box className = "box1"></Box>
            <Box className = "box2"></Box>
            <Box className = "box3"></Box>
            <Box className = "box4"></Box>
            <Box className = "box5"></Box>
            <Box className = "box7"></Box>
            <Box className = "box6"></Box>
          </section>
          <Footer></Footer>
        
        </div>

        </div>
          );
        }
}

export default Inicio;
