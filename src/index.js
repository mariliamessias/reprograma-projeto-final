import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Inicio from './pages/Start/Start';
import Home from './pages/Home/Home';
import SideDrawer from '../src/components/Menu/SideDrawer.js'
import Chat from './pages/Chat/Chat'
import Login from './pages/Login/Login'
import BackDrop from '../src/components/Backdrop/Backdrop'
import YouTube from 'react-youtube';
import {createStore, applyMiddleware } from 'redux'
import './index.css';

class App extends Component {
    state = {
       sideDrawerOpen: false
    };
    drawerToogleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    backdropClickHandler = () =>{
        this.setState({sideDrawerOpen: false});
    };

render(){
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen){
        sideDrawer = <SideDrawer/>
        backdrop = <BackDrop click={this.backdropClickHandler}/>
    }

    return (
          <div className="app" style={{height: '100%'}}>
          <Header drawerClickHandler={this.drawerToogleClickHandler}/>
          <SideDrawer show = {this.state.sideDrawerOpen}/>
            {backdrop}
              <Switch>
                  <Route path="/" exact component={Inicio} />
                  <Route path="/home" component={Home} />
                  <Route path="/chat" component={Chat} />
                  <Route path="/login" component={Login} />
              </Switch>
            </div>
      )
    }    
}

ReactDOM.render((

    <BrowserRouter>
        <App />
    </BrowserRouter>

), document.getElementById('root'));

