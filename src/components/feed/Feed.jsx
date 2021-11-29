import React,{useEffect} from 'react'
import './Feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getPosts} from '../../actions/postActions';

const Feed = ({posts: {posts,loading},getPosts}) => {

    useEffect( ()=> {
        getPosts();
        },[])


    if(loading || posts === null)
     return <h1>Loading...</h1>

     
    return (
        <div className="feed">
            <div className="feedWrapper">
                    <Share />
                    {
                        posts.map( post => post && <Post key={post.id} post={post} />)
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
    posts: state.posts
})
export default connect(mapStateToProps,{getPosts})(Feed);
