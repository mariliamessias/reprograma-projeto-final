import React, { Component } from 'react'
import './MessageList.css';
 class MessagesList extends Component {
   render() {
     
     return (
       <div className="__container">
         <ul>
           {this.props.messages.map((message, index) => (
             <li className="messageSend" key={index} >
               <div>
                 <span className="senderUsername">{message.senderId}</span>{' '}
               </div>
               <p className="message">{message.text}</p>
             </li>
           ))}
         </ul>
       </div>
     )
   }
 }

 export default MessagesList
