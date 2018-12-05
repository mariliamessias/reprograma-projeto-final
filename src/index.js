import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Inicio from './pages/Start/Start';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import './index.css';


function App() {

    return (
      <div className="app">
        
        <Header/> 
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/home" component={Home} />
                <Route path="/chat" component={Chat} />
            </Switch>
      </div>
    )
  }

ReactDOM.render((

    <BrowserRouter>
        <App />
    </BrowserRouter>


), document.getElementById('root'));

