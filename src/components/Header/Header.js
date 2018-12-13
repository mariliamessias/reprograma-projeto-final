import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DrawerTogglerButton from '../Menu/DrawerTogglerButton.js';
import './Header.css'

const Header = props => (
  <header className="header">
    <nav className="header__navigation">
      <div className="header__toggle-button"><DrawerTogglerButton click={props.drawerClickHandler}/></div>
      <div className="header__logo"><a href="/">QUER UM CONSELHO?</a></div>
      <div className="spacer"/>
      <div className="header__navigation-items"> 
        <ul>
          <li><a href="/">Introdução</a></li>
          <li><a href="/">Sobre Nós</a></li>
          <li><a href="/">Contato</a></li>
          <li><a href="/login">Minha Conta</a></li>
          <li><a href="/">Meus Serviços</a></li>
          <li><a href="/">Sair</a></li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Header;