import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postsReducer from './postsReducer';
import usersReducer from "./usersReducer";


export default combineReducers({
    user: userReducer,
    posts: postsReducer,
    users: usersReducer
})