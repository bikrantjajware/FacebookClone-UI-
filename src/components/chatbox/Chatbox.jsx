import React, { useRef,useEffect, useState } from 'react'
import './Chatbox.css';
import {VideoCall,Call,Cancel,Send} from '@material-ui/icons'


let idCounter = 15;

const Chatbox = ({profilePicture,name,closeChatbox}) => {


    const messagesEndRef = useRef(null);

    const [message,setMessage] = useState('')
    const onChange = (e) => {
        setMessage(e.target.value);
    }

   

    const [chatHistory,setChatHistory] = useState([
        {
            id:1,
            type:"sent",
            message: "Hi",
        },
        {
            id:2,
            type:"received",
            message: "Hello",
        },
        {
            id:3,
            type:"sent",
            message: "Whats up",
        },
        {
            id:4,
            type:"received",
            message: "all good...",
        },
        {
            id:5,
            type:"sent",
            message: "cool",
        },
        {
            id:6,
            type:"received",
            message: ":)",
        }
    ]);
    
    useEffect(() => {
        scrollToBottom()
      }, [chatHistory,message]);


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }


    const sendMessage = (e) => {

        if(message === "") return;

        if(e.type === 'click')
        {
            const newMessage = {
                id: ++idCounter,
                type: "sent",
                message: message
            }
            console.log(message);
            setChatHistory( prev =>  [...prev,newMessage]);
            setMessage("")
        }
        

    }
    return (
        <div className="chatbox">
            <div className="chatboxTop">
                <div className="topLeft">
                    <img src={profilePicture} className="circularImage" alt="profile" />
                    <span className="username">{name}</span>
                </div>
                <div className="topRight">
                    <span className="videoCallIcon"><VideoCall /></span>
                    <span className="callIcon"><Call /></span>
                    <span className="cancelIcon" onClick={closeChatbox}><Cancel /></span>
                </div>
            </div>
            <hr  />
            <div className="messageBox">
               <div className="messageBoxWrapper">
                   {
                       chatHistory.map( msgItem => <p key={msgItem.id} className={`${msgItem.type}Wrapper`} ><span className={msgItem.type}>{msgItem.message}</span> </p> )
                   }
                    <div ref={messagesEndRef}></div>
               </div>
            </div>
            <div className="chatboxBottom">
                <div className="bottomWrapper">
                    <textarea type="text" placeholder="send message" rows={ message === "" ? 1 : Math.ceil(message.length/23) }  onChange={onChange} value={message} className="messageInput" />
                    <span className="sendIcon" onClick={sendMessage}><Send /></span>
                </div>
            </div>
        </div>
    )
}

export default Chatbox
