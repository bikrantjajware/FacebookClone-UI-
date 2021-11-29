import {GET_POSTS,GET_POST_USER,ADD_POST} from '../actions/types';


const initialState = {
    loading: false,
    error: null,
    posts: null,
    user:null
}

const postsReducer = (state = initialState,action) => {

    switch(action.type)
    {
        case ADD_POST: return {...state,loading:false,posts: [action.payload,...state.posts]}
        case GET_POST_USER: return {...state,loading:false,user:action.payload}
        case GET_POSTS: return {...state,loading:false,posts:action.payload}
        default : return state
    }
}

export default postsReducer;