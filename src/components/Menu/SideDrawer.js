import React from 'react'
import './SideDrawer.css';
const sideDrawer = props =>{
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
  return (   
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Introdução</a></li>
            <li><a href="/">Sobre Nós</a></li>
            <li><a href="/">Contato</a></li>
            <li><a href="/login">Minha Conta</a></li>
            <li><a href="/">Meus Serviços</a></li>
            <li><a href="/">Sair</a></li>
        </ul>
    </nav>
  );
};

export default sideDrawer;