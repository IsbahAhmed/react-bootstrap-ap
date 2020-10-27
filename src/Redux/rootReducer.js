import {combineReducers} from 'redux';
import userReducer from "./userReducer/userReducer";
import uiReducer from "./uiReducer/uiReducer";
import productReducer from "./productsReducer/productReducer";
import catagoryReducer from "./catagoryReducer/catagoryReducer";
import sliderReducer from "./sliderReducer/sliderReducer";
import appUsersReducer from "./appUsers/appUsersReducer";
import ordersReducer from "./orders/ordersReducer";
import newsletterReducer from "./newsletter/newsletterReducer";
import messagesReducer from "./messages/messagesReducer";


var rootReducer = combineReducers({
  user : userReducer,
   ui:uiReducer,
  products:productReducer,
  catagories:catagoryReducer,
  slider : sliderReducer,
  appUsers : appUsersReducer,
  orders : ordersReducer,
  newsletterSubs: newsletterReducer,
  messages : messagesReducer
})

export default rootReducer