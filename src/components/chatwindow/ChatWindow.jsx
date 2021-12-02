import React, { useEffect } from 'react'
import './ChatWindow.css';
import Chatbox from '../chatbox/Chatbox'
import { connect } from 'react-redux'
import { getChatHistory } from '../../actions/chathistoryActions';

const ChatWindow = ({chatsState: {chats}}) => {
   
    useEffect( () =>  getChatHistory,[chats]) 
    
    return (
        <div className="chatwindow">
            {
               chats && chats.map( (chat,index) =>  <Chatbox key={index} index={index} messages={chat.messages} friend={chat.friend} /> )
            }
        </div>
    )
}

const mapStateToProps = (state)  => ({
    chatsState: state.chathistory
})

export default connect(mapStateToProps,{getChatHistory})(ChatWindow);
