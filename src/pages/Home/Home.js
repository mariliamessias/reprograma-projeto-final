import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer'
import './Home.css';

class Home extends Component {
  render() {
    return (
    <main className="home">
        <section className="geral">
            <div className="coluna1">
                <div className="linha1">
                    <div className="Chat">
                        <h1>Converse com um Conselheiro</h1>
                        <p>Nessa opção você conseguirá ter acesso a um conselheiro através de mensagens.</p>
                    </div>
                </div>        
                <div className="linha2">
                    <h1>Localize uma clínica/consultório</h1>
                    <p>Nessa opção você conseguirá ter acesso a um conselheiro através de mensagens.</p>
                </div>
               
            </div>        
            <div className="coluna2">
                <div className="linha1">
                    <h1>Termos de Uso</h1>
                    <p>Nessa opção você conseguirá ter acesso a um conselheiro através de mensagens.</p>
                </div>        
                <div className="linha2">
                      <h1>Glossário</h1>
                      <p>Nessa opção você conseguirá ter acesso a um conselheiro através de mensagens.</p>
                </div>
               
            </div>
          
        </section>    
        <Footer></Footer>
    </main>
    );
    }
}

export default Home;