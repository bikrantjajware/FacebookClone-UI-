import React from 'react'
import './Post.css';
import { MoreVert ,Favorite, ThumbUpOutlined,ModeCommentOutlined,ShareOutlined} from '@material-ui/icons';
import {RecommendRounded} from '@mui/icons-material';


const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                        <div className="postTopLeft">
                            <div>
                                <img className="postProfileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEOEHLo5T0laBB8JKDrMY2fpVYeYNHUnDMA&usqp=CAU" alt="profile" />
                            </div>
                            <div className="postMetaInfo">
                                <span className="postUsername">Daniel Craig</span>
                                <span className="postDate">5 mins ago</span>
                            </div>
                        </div>
                        <div className="postTopRight">
                             <MoreVert />
                        </div>
                </div>
                <div className="postCenter">
                    <span className="postText">My first post text</span>
                    <img className="postImage" src="https://www.denofgeek.com/wp-content/uploads/2020/04/James-Bond-Gun-Barrel-1.jpg?fit=1400%2C874" alt="james-bond" />
                </div>
                <div className="postBottom">
                    <div className="postBottomTop">
                        <div className="postBottomTopLeft">
                            <RecommendRounded className="likeIcon"  style={{color:'blue',fontSize:'1.3rem'}} />
                            <Favorite className="likeIcon" style={{color:'red',fontSize:'1.3rem'}} />
                            <span className="likeCounter">1k</span>
                        </div>
                        <div className="postBottomTopRight">
                            <span className="commentCount">100 comments</span>
                            <span className="shareCount">6 shares</span>
                        </div>
                    </div>
                    <hr className="posteHr" />
                    <div className="postBottomBottom">
                        <div className="postBottomBottomleft">
                                <ThumbUpOutlined />
                                <span className="likeText">Like</span>
                        </div>
                        <div className="postBottomBottomCenter">
                                 <ModeCommentOutlined />
                                 <span className="commentText">Comment</span>
                        </div>
                        <div className="postBottomBottomRight">
                                <ShareOutlined />
                                 <span className="shareText">Share</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
