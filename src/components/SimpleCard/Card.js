import React, {Component} from 'react'
import Termos from './termo.jpg';
import { Link, withRouter } from 'react-router-dom';
import './Card.css'

class Card extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
    render() {
      return (
        <div className="cardContainer">
        <div className= {this.props.className}>

         {(this.props.className==='chat')? 
            <div>
              <header className="cardHeader-chat">   
              </header>
              <footer className="cardFooter">
                <h3>Chat com conselheiro</h3>
                <p>Nesta rotina você conseguirá conversar com um conselheiro anônimo.</p>
                <Link to="/chat" className="botaoAcessar-chat">
                  Acessar Chat
                </Link>
               
              </footer>
            </div>
          : null
          }

           {(this.props.className==='glossario')? 
            <div>
              <header className="cardHeader-glossario">   
              </header>
              <footer className="cardFooter">
                <h3>Banco de Conhecimento</h3>
                <p>Para localizar informações referentes a sintomas, artigos de autoajuda, links úteis etc;</p>
                <button type="submit" className="botaoAcessar-glossario">Consultar</button>
              </footer>
            </div>
          : null
          }          
          
          {(this.props.className==='clinicas')? 
            <div>
              <header className="cardHeader-clinicas">   
              </header>
              <footer className="cardFooter">
                <h3>Localize um Consultório/Clínica</h3>
                <p>Os credenciados foram separados por tipo, pago ou gratuito e por estado para facilitar sua localização.</p>
                <button type="submit" className="botaoAcessar-clinicas">Localizar</button>
              </footer>
            </div>
          : null
          }

           {(this.props.className==='normas')? 
            <div>
              <header className="cardHeader-normas">   
              </header>
              <footer className="cardFooter">
                <h3>Termos e Normas de Utilização</h3>
                <p>Indicamos dar uma boa lida neste conteúdo, pois nos ausentamos de responsabilidade sobre a conversa.</p>
                <button type="submit" className="botaoAcessar-normas">Ler Termos/Normas</button>
              </footer>
            </div>
          : null
          }

          </div>
        </div>
      )
    }
  }

export default Card