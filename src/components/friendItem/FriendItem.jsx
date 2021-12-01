import React,{useState} from 'react'
import './FriendItem.css';
import Chatbox from '../chatbox/Chatbox';





const FriendItem = ({username,profilePicture}) => {
    
    const [showChatbox,setShowChatbox] = useState(false);
    const closeChatbox = () => {
        setShowChatbox(false);
    }


    return (
        <>
        <div className="friendItemContainer">
            <div className="friendImageContainer">
                <img src={profilePicture} className="rightbarFriendImg" alt="profile" />
                <span className="onlineBadge"></span>
            </div>
            <span onClick={ () => setShowChatbox(true)} className="rightbarFriendName">{username}</span>
        </div>
           { showChatbox && <Chatbox closeChatbox={closeChatbox} profilePicture={profilePicture} name={username.split(" ")[0]} />}
        </>
    )
}

export default FriendItem
