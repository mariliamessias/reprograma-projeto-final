import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import Card from '../../components/SimpleCard/Card'

import './Home.css';

class Home extends Component {
  render() {
    return (
    <main className="home">
    <div className="conteudoGeral">
        
            <div className="coluna1">
                <Card/>
            </div>        
            <div className="coluna2">
             <Card/>
            </div>
             <div className="coluna3">
                 <Card/>
             </div>
             <div className="coluna4">
                <Card/>
             </div>
    </div>  
        <Footer></Footer>
    </main>
    );
    }
}

export default Home;
