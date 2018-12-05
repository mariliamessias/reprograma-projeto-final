import React, { Component } from 'react'
import './MessageList.css';
 class MessagesList extends Component {

  constructor(props) {
   super(props)
  }
   render() {
     
     return (
       <div className="__container">
       
             
              {this.props.messages.map((message, index) => (
                <ul className="centralContainer">
                  {(message.senderId ==="Samanta")?
                    <li className={message.senderId} key={index} >
                    <div>
                      <span className="senderUsername">{message.senderId}</span>{' '}
                    </div>
                    <p className="message">{message.text}</p>
                  </li>
                  : <li className="otherUser" key={index} >
                      <div>
                        <span className="senderUsername">{message.senderId}</span>{' '}
                      </div>
                      <p className="message">{message.text}</p>
                    </li>
                }
                </ul>
              ))}
                     
       </div>
     )
   }
 }

 export default MessagesList
