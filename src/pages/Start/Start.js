import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer'
import Box from '../../components/Box/Box'
import './Start.css';

class Inicio extends Component {
  render() {
    return (
      <div className="inicio">
        

        <section className="secao1">
            <Box className="transparent"></Box>
            <Box className = "red"></Box>
            <Box className = "blue"></Box>
            <Box className = "rosa"></Box>
            <Box className = "blue1"></Box>
            <Box className = "blue2"></Box>
          </section>
          <Footer></Footer>
        </div>
          );
        }
}

export default Inicio;
