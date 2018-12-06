import React from 'react';
import DrawerTogglerButton from '../Menu/DrawerTogglerButton.js';
import './Header.css'

const Header = props => (
  <header className="header">
    <nav className="header__navigation">
      <div className="header__toggle-button"><DrawerTogglerButton click={props.drawerClickHandler}/></div>
      <div className="header__logo"><a href="/">VAMOS CONVERSAR?</a></div>
      <div className="spacer"/>
      <div className="header__navigation-items"> 
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/">Sobre Nós</a></li>
          <li><a href="/">Contato</a></li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Header;