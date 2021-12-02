import React from 'react'
import './FriendItem.css';
import { getChatHistory,removeChat } from '../../actions/chathistoryActions';
import { connect } from 'react-redux';




const FriendItem = ({id,username,profilePicture,getChatHistory,removeChat,chatState: {chats}}) => {
    
    const openChatbox = () => {

        let flag = chats.some((chat) => chat.friend === id || chat.friend.id === id)

        if (!flag) {

            if(chats.length >=2 )
            {
                removeChat(0)
            }
            getChatHistory(id)
        }
    }

    return (
        
        <div className="friendItemContainer">
            <div className="friendImageContainer">
                <img src={profilePicture} className="rightbarFriendImg" alt="profile" />
                <span className="onlineBadge"></span>
            </div>
            <span onClick={openChatbox} className="rightbarFriendName">{username}</span>
        </div>
           
    )
}
const mapStateToProps = (state) => ({
    chatState: state.chathistory
})

export default connect(mapStateToProps,{getChatHistory,removeChat})(FriendItem);
