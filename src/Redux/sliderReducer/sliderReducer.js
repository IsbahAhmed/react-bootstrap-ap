import { ADD_NEW_SLIDER_ITEM, SET_SLIDER, EDIT_SLIDER_ITEM, DELETE_SLIDER_ITEM } from "./sliderConstants";

var initialState = [];

var sliderReducer = (state = initialState,actions)=>{
var {type,payload} = actions;
switch (type) {
 case ADD_NEW_SLIDER_ITEM:
     return [...state,payload.item]
case SET_SLIDER:
    return payload.sliderItems
    case EDIT_SLIDER_ITEM:
        var oldState = state.filter(({id})=>id !== payload.item.id)
        return [...oldState,payload.item]
      case DELETE_SLIDER_ITEM:

          return state.filter(({id})=>payload.itemId !== id)
    default:
       return state;
}
}
export default sliderReducer