import {
    GET_USER,REMOVE_USER,SET_LOADING
} from '../actions/types';

const initialState = {
    loading: false,
    error: null,
    user: null,
}

const userReducer = (state=initialState,action) => {

    switch(action.type){

        case GET_USER : return {...state,loading:false,user:action.payload}
        case REMOVE_USER : return {...state,loading:false,user:null}
        case SET_LOADING : return { ...state,loading: true}
        default : return state;
    }
}

export default userReducer;