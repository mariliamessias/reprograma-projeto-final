import React, {Component} from 'react';
import { SideNav, Nav } from 'react-sidenav'
import Foto from '../Sidebar/perfil.png';
import './Sidebar.css';


class Sidebar extends Component {

render(){
  return(
    <div>
       <div className="sidebar">
        <nav className="">
            <ul className="sidebarMenu">
                <li >
                    <div className="fotoContainer">
                    <img className ="perfil" src={Foto} />
                    </div>
                </li>
                <div className="itemContainer">
                    <h4>
                        Um pouco mais sobre seu conselheiro:
                    </h4>
                    <p>
                    Sou hoje um caçador de achadouros da infância. Vou meio dementado e enxada às costas cavar no meu quintal vestígios dos meninos que fomos.

                    </p>
                    {/* <li className="itemsContainer">
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
                    </li> */}

                </div>
               
            </ul>
        </nav>
        
        </div>
    </div>
    )
  }
}

export default Sidebar

