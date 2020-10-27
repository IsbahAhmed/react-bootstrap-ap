import { SET_APP_USERS } from "./appUsersConstants";

var initialState = [];

var appUsersReducer = (state = initialState,actions)=>{
    var {type,payload} = actions;
    switch (type) {
     
    case SET_APP_USERS:
        return payload.users
        default:
        return state
    }
}
export default appUsersReducer;