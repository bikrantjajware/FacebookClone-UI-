import {GET_POSTS,GET_POST_USER,ADD_POST} from './types'
import {posts} from '../db';
import { users } from '../db';
import { setLoading } from './userActions';



export const getPosts = () => dispatch =>{
    setLoading()
    console.log("calling");
    posts.forEach( post => { 
        post.user = users.filter(user => user.id === post.user)[0];
    });
    dispatch({
        type: GET_POSTS,
        payload: posts
    })
}

export const getPostUser = (id) => dispatch => {
    
    console.log('getpuser');
    const postUser = users.filter( user => user.id === id)[0];
    console.log('getpuser',postUser);
    dispatch({
        type: GET_POST_USER,
        payload: postUser
    })
}

export const addPost = (data) => dispatch => {
    data.id = posts.length+1;
    data.like= 0;
    data.comment= 0;
    data.share= 0;
    console.log(data);
    dispatch({
        type: ADD_POST,
        payload: data
    })
}