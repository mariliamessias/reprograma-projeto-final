import React, {Component} from 'react';
import { SideNav, Nav } from 'react-sidenav'
import './Sidebar.css';


class Sidebar extends Component {

render(){
  return(
    <div>
       <div className="sidebar">
        <nav className="">
            <ul>
                <li >
                    <div className="fotoContainer">

                    </div>
                </li>
                <ul className="itemContainer">
                    <li className="itemsContainer">
                        <a href="#">Perfil</a>
                    </li>
                    <li className="itemsContainer">
                        <a href="#">Conversa</a>
                    </li>
                    <li className="itemsContainer">
                        <a href="#">Glossário</a>
                    </li>
                    <li className="itemsContainer">
                        <a href="#">Termos de Uso</a>
                    </li>
                    <li className="itemsContainer">
                        <a href="#">Sair</a>
                    </li>
                </ul>
               
            </ul>
        </nav>
        
        </div>
    </div>
    )
  }
}

export default Sidebar

