import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageList from '../../components/MessageList/MessageList'
import SendMessageForm from '../../components/SendMessageForm/SendMessageForm'
import Footer from '../../components/Footer/Footer'
import SideBar from '../../components/Sidebar/Sidebar'
import './ChatScreen.css';

class ChatScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {},
     currentRoom: {},
     messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage(text) {
       this.state.currentUser.sendMessage({
          text,
          roomId: this.state.currentRoom.id,
        })
     }

  componentDidMount () {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:20b55e86-abcf-463c-87f8-52d96d352c08',
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'https://querumconselho.herokuapp.com/authenticate',
        // url: 'http://localhost:3001/authenticate',

      }),
    })

    chatManager
      .connect()
      .then(currentUser => {
       this.setState({ currentUser })
        return currentUser.subscribeToRoom({
          roomId: "19390701",
          messageLimit: 100,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message],
              })
            },
          },
        })
      })
      .then(currentRoom => {
       this.setState({ currentRoom })
       })
      .catch(error => console.error('error', error))
  }

  render() {
    return (
      <div>
      <div className="principalContainer">
         <div className="firstContainer">
          <SideBar/>
          </div>
          <div className="secondContainer">
            <div className="historicoMensagem">
              <MessageList
                messages={this.state.messages}
                className={this.props.currentUsername}
              />
             </div>
           <div className="novaMensagem">
           <SendMessageForm onSubmit={this.sendMessage} />
             </div> 
          </div>
        
        </div>
        <Footer></Footer>
      </div>

    )
  }
}

export default ChatScreen