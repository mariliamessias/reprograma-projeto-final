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
        
            <div className="coluna1"><Card className="chat"/></div>        
            <div className="coluna2"><Card className="glossario"/></div>
            <div className="coluna3"><Card className = "clinicas"/></div>
            <div className="coluna4"><Card className ="normas"/></div>
    </div>  
        <Footer></Footer>
    </main>
    );
    }
}

export default Home;
