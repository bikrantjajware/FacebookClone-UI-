import {
    GET_USERS,SET_LOADING
} from '../actions/types';

const initialState = {
    loading: false,
    users: [],
}

const usersReducer = (state=initialState,action) => {

    switch(action.type){

        case GET_USERS : return {...state,loading:false,users:action.payload}
        case SET_LOADING : return { ...state,loading: true}
        default : return state;
    }
}

export default usersReducer;