import React from 'react'
import './Share.css';
import {Videocam,Collections,InsertEmoticon} from '@material-ui/icons';

const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="profileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEOEHLo5T0laBB8JKDrMY2fpVYeYNHUnDMA&usqp=CAU" alt="profile" />    
                    <input type="text" className="shareInput" placeholder="Whats on your mind?" />
                </div>
                <hr className="shareHr" />
                <div className="sharebottom">
                        <div className="shareOptions">
                                <div className="shareOption">
                                    <Videocam className="shareOptionIcon" />
                                    <span className="shareOptionText">Live video</span>
                                </div>
                                <div className="shareOption">
                                    <Collections className="shareOptionIcon"/>
                                    <span className="shareOptionText">Photo/Video</span>
                                </div>
                                <div className="shareOption">
                                    <InsertEmoticon className="shareOptionIcon"/>
                                    <span className="shareOptionText">Feeling/Activity</span>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Share
