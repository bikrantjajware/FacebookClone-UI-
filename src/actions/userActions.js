import { GET_USER,REMOVE_USER,SET_LOADING } from "./types";
import {users} from '../db';

export const setLoading = () => {
    return ({ type: SET_LOADING})
}

export const getUser = (id=1) => dispatch => {
    setLoading()
    const user = users.filter( user => user.id === id)[0]
    
    dispatch({
        type: GET_USER,
        payload: user
    })
}