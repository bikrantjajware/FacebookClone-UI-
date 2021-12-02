import React, { useRef,useEffect, useState } from 'react'
import './Chatbox.css';
import {VideoCall,Call,Cancel,Send} from '@material-ui/icons'
import { sendMessage,removeChat } from '../../actions/chathistoryActions';
import {connect} from 'react-redux';


let idCounter = 15;

const Chatbox = ({messages,friend,index,sendMessage,removeChat}) => {


    const messagesEndRef = useRef(null);

    const [message,setMessage] = useState('')
    const onChange = (e) => {
        setMessage(e.target.value);
    }

   
    
    useEffect(() => {
        
        scrollToBottom()
      }, [message]);


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }


    const onSend = (e) => {

        if(message === "") return;

        if(e.type === 'click')
        {
            const newMessage = {
                id: ++idCounter,
                type: "sent",
                message: message
            }
            console.log(newMessage);
            sendMessage(newMessage,index);
            setMessage("")
        }
        

    }
    return (
        <div className="chatbox">
            <div className="chatboxTop">
                <div className="topLeft">
                    <img  className="circularImage"  src={friend.picture} alt="profile" />
                    <span className="username">{friend.name}</span>
                </div>
                <div className="topRight">
                    <span className="videoCallIcon"><VideoCall /></span>
                    <span className="callIcon"><Call /></span>
                    <span className="cancelIcon" onClick={ () => removeChat(index) } ><Cancel /></span>
                </div>
            </div>
            <hr  />
            <div className="messageBox">
               <div className="messageBoxWrapper">
                   {
                      messages && messages.map( msgItem => <p key={msgItem.id} className={`${msgItem.type}Wrapper`} ><span className={msgItem.type}>{msgItem.message}</span> </p> )
                   }
                    <div ref={messagesEndRef}></div>
               </div>
            </div>
            <div className="chatboxBottom">
                <div className="bottomWrapper">
                    <textarea type="text" placeholder="send message" rows={ message === "" ? 1 : Math.ceil(message.length/23) }  onChange={onChange} value={message} className="messageInput" />
                    <span className="sendIcon" onClick={onSend}><Send /></span>
                </div>
            </div>
        </div>
    )
}

export default connect(null,{sendMessage,removeChat})(Chatbox);
