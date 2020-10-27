import { SIGN_IN, REMOVE_USER } from "./userAction";

var initialState = {
    currentUser:null
}
var userReducer = (state = initialState,actions)=>{
    var {type,payload} = actions;
    switch (type) {
     case SIGN_IN:
         return payload.userObj
    case REMOVE_USER:
        return payload.userObj
        default:
          return state
    }
}
export default userReducer