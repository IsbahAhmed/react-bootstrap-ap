import { SET_MESSAGES } from "./messagesActions";

var initialState = [];

var messagesReducer = (state = initialState,actions)=>{
    var {payload,type} = actions;
    switch (type) {
    
    case SET_MESSAGES:
        return payload.messages
        default:
        return state
    }
}

export default messagesReducer