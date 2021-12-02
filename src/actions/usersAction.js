import { GET_USERS,SET_LOADING } from "./types";
import {users} from '../db';

export const setLoading = () => {
    return ({ type: SET_LOADING})
}

export const getUsers = () => dispatch => {
    setLoading()
    const friends = users.filter( user => user.id !== 1)
    dispatch({
        type: GET_USERS,
        payload: friends
    })
}

