import React, {Component} from 'react'
import Termos from './termo.jpg';

import './Card.css'

class Card extends React.Component {
    render() {

      return (
        <div className="cardContainer">
              <header className="cardHeader">   
                <h4>Conteúdo</h4>
              </header>
              <footer className="cardFooter">
                <h3>kasdnigasuodlkjabkj</h3>
                <p>lksadjkadsiouadsknadsbhuiasdjnadsnbadsjaysdashdbmmads</p>
                <button type="submit" className="botaoAcessar">Acessar</button>
              </footer>
        </div>
      )
    }
  }

export default Card