import { SIDEBAR_TOGGLE } from "./ui_constants";

var initialState = {
  sidebarActive: true
};

var uiReducer = (state = initialState, actions) => {
  var { payload, type } = actions;
  switch (type) {
    case SIDEBAR_TOGGLE:
      
        return { ...state, sidebarActive:!payload.sidebarActiveValue};


    default:
      return state;
  }
};
export default uiReducer;
