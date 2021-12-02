import { GET_CHAT_HISTORY,SEND_MESSAGE,REMOVE_CHAT } from "./types";
import { chathistory,users } from "../db";




export const getChatHistory = (id) => dispatch => {

    
    
    var history = chathistory.filter( chat =>  id === chat.friend || id === chat.friend.id )[0]
    
    const friend = users.filter( user => user.id === id)[0];
    history.friend = friend;
    dispatch({
        type: GET_CHAT_HISTORY,
        payload: history
    })
}

export const sendMessage = (msg,idx) => dispatch => {

    console.log(idx);
    dispatch({
        type: SEND_MESSAGE,
        payload: { message :msg, index:idx }
    })
}

export const removeChat = (idx) => dispatch => {

    console.log('remove= ',idx);
    dispatch({
        type: REMOVE_CHAT,
        payload: idx
    })
}
