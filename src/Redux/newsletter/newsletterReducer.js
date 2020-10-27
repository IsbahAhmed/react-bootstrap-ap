import { SET_NEWSLETTER } from "./newsletterActions";

var initialState = [];

var newsletterReducer = (state = initialState,actions)=>{
    var {payload,type} = actions;
    switch (type) {
     case SET_NEWSLETTER:
         return payload.newsLetterSubs
    
        default:
        return state
    }
}

export default newsletterReducer