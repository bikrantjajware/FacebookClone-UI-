import {GET_POSTS,GET_POST_USER,ADD_POST,LIKE_POST,DISLIKE_POST} from '../actions/types';


const initialState = {
    loading: false,
    error: null,
    posts: null,
    user:null
}

const postsReducer = (state = initialState,action) => {

    console.log(action);
    switch(action.type)
    {
        case LIKE_POST :   state.posts.forEach( (post,i) => {if(post.id === action.payload.post) {
                                                                state.posts[i].like.push(action.payload.user)
        }})
                            return state;
        case DISLIKE_POST :     let postIdx = -1;
                                state.posts.forEach( (post,i) => { if(post.id === action.payload.post){
                                                                postIdx = i;
                                                                
                                            }}  );
                                
                                if(postIdx > -1)
                                {
                                    const likeIdx = state.posts[postIdx].like.indexOf(action.payload.user);
                                    if(likeIdx > -1)
                                        state.posts[postIdx].like.splice(likeIdx,1);
                                    else
                                        console.log("like not found");
                                }
                                else
                                console.log("post not found");
                                return state;
                         
        case ADD_POST: return {...state,loading:false,posts: [action.payload,...state.posts]}
        case GET_POST_USER: return {...state,loading:false,user:action.payload}
        case GET_POSTS: return {...state,loading:false,posts:action.payload}
        default : return state
    }
}

export default postsReducer;