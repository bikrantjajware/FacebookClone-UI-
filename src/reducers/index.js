import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postsReducer from './postsReducer';
import usersReducer from "./usersReducer";
import chathistoryReducer from "./chathistoryReducer";


export default combineReducers({
    user: userReducer,
    posts: postsReducer,
    users: usersReducer,
    chathistory: chathistoryReducer
})