import React,{useState} from 'react'
import './Post.css';
import { MoreVert ,Favorite, ThumbUpOutlined,ModeCommentOutlined,ShareOutlined} from '@material-ui/icons';
import {RecommendRounded} from '@mui/icons-material';
import { likePost,dislikePost } from '../../actions/postActions';
import { connect } from 'react-redux';


const Post = ({post,isLiked,loggedInUser,likePost,dislikePost}) => {

    const {name,picture} = post.user 
    const {caption,timestamp,media, like,comment,share} = post

    const [liked,setLiked] = useState(isLiked);
    const onLike = () => {
         console.log('liked=',liked);
        if(liked)
            dislikePost(post.id,loggedInUser.id);
        else
            likePost(post.id,loggedInUser.id);

        setLiked(!liked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                        <div className="postTopLeft">
                            <div>
                                <img className="postProfileImg" src={picture} alt="profile" />
                            </div>
                            <div className="postMetaInfo">
                                <span className="postUsername">{name}</span>
                                <span className="postDate">{timestamp.toLocaleString()} </span>
                            </div>
                        </div>
                        <div className="postTopRight">
                             <MoreVert />
                        </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{caption}</span>
                    {media && <img className="postImage" src={media} alt={caption} />}
                </div>
                <div className="postBottom">
                    <div className="postBottomTop">
                        <div className="postBottomTopLeft">
                            <RecommendRounded className="likeIcon"  style={{color:'blue',fontSize:'1.3rem'}} />
                            <Favorite className="heartIcon" style={{color:'red',fontSize:'1.3rem'}} />
                            <span  className="likeCounter">{like.length}</span>
                        </div>
                        <div className="postBottomTopRight">
                            <span className="commentCount">{comment} comments</span>
                            <span className="shareCount">{share} shares</span>
                        </div>
                    </div>
                    <hr className="posteHr" />
                    <div className="postBottomBottom">
                        <div className="postBottomBottomleft" onClick={onLike}>
                                <ThumbUpOutlined className={`${liked && "blue"}`} />
                                <span  className="likeText" >Like</span>
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


export default connect(null,{likePost,dislikePost})(Post);
