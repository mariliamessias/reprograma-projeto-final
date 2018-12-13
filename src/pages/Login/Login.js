import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'

import './Login.css';

class Login extends Component {
  render() {
    return (
    <main className="login">
    <div className="conteudoGeralLogin">
        <div className="conteudoLogin">

                <form className="formularioLogin">
                <h1>Acesso</h1>
                    <p>Realize o login para acessar nossos recursos!</p>
                    <p>Email:</p>
                    <input type="text" className="usuario"></input>
                    <p>Senha:</p>
                    <input type="text" className="senha"></input>
                        <Link to="/home" className="buttonLogin">
                        Entrar
                        </Link>
                </form>
        </div>
        <div className="conteudoCriarConta">
            <div className="conteudoCriarConta-texto">
                <h1>Ainda não possui uma conta?
                </h1>
                <p>
                    Para utilizar nossos serviços é necessário realizar login com usuário e senha. Caso você não possua uma conta cadastrada, clique no botão abaixo e faça um rápido cadastro para acessar nossos recursos.
                </p>
                <button type="submit" className="buttonLogin">Criar uma Conta</button>
            </div>
        </div>
    </div>
        <Footer></Footer>
    </main>
    );
    }
}

export default Login;
