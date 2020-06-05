import userReducer from "./userReducer/userReducer";
import {combineReducers} from 'redux';


var rootReducer = combineReducers({
   user: userReducer
})

export default rootReducer