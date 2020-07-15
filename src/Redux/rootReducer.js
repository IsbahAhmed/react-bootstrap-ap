import userReducer from "./userReducer/userReducer";
import {combineReducers} from 'redux';
import uiReducer from "./uiReducer/uiReducer";
import productReducer from "./productsReducer/productReducer";
import catagoryReducer from "./catagoryReducer/catagoryReducer";


var rootReducer = combineReducers({
   user: userReducer,
   ui:uiReducer,
  products:productReducer,
  catagories:catagoryReducer
})

export default rootReducer