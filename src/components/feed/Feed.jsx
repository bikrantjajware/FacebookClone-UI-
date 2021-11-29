import React,{useEffect} from 'react'
import './Feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getPosts} from '../../actions/postActions';
import { getUser } from '../../actions/userActions';

const Feed = ({posts: {posts,loading},getPosts,getUser,user: {user}}) => {

    useEffect( ()=> {
        getPosts();
        getUser(1);
        },[getPosts,getUser])

    

    if(loading || posts === null || user === null )
     return <h1>Loading...</h1>

     
    return (
        <div className="feed">
            <div className="feedWrapper">
                    <Share />
                    {
                        posts.map( post => post && <Post loggedInUser={user} key={post.id} post={post} isLiked={ post.like.includes(user.id) } />)
                    }
            </div>
        </div>
    )
}

Feed.propTypes =  ({
    posts: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
})
const mapStateToProps = (state) => ({
    posts: state.posts,
    user: state.user
})
export default connect(mapStateToProps,{getPosts,getUser})(Feed);
