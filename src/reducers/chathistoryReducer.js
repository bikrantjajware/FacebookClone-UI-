import { GET_CHAT_HISTORY,SEND_MESSAGE,REMOVE_CHAT } from "../actions/types";



const initialState = {
    chats: []

}

const chathistoryReducer = (state=initialState,action) => {

    console.log(action);

    switch (action.type) {
        case GET_CHAT_HISTORY: 
                                return {...state,chats: [...state.chats,action.payload]}

        case SEND_MESSAGE:  var chatItem = state.chats[action.payload.index];  
                            chatItem.messages.push(action.payload.message);
                            return state;

        case REMOVE_CHAT:  return {...state,chats: state.chats.filter( (chat,idx) => idx !== action.payload )}
        default: return state;
        
    }
}

export default chathistoryReducer;