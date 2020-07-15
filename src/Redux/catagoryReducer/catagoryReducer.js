import { ADD_CATAGORY, SET_CATAGORIES, EDIT_CATAGORY, DLT_CATAGORY } from "./catagoryConstants";

var initialState = [];

var catagoryReducer = (state=initialState,actions)=>{
var {payload,type} = actions;

switch (type) {
 case ADD_CATAGORY:
     return [...state,payload.catObj]
case SET_CATAGORIES:
    return [...payload.catagories]
  case EDIT_CATAGORY:
      var filteredCats = state.filter((cat)=> cat.catId !== payload.catId);
      return [...filteredCats,{...payload.catObj,catId:payload.catId}]  

    case DLT_CATAGORY:
        var filteredCats = state.filter((cat)=> cat.catId !== payload.catId);
        return [...filteredCats]  
    default:
        return state;
}
}
export default catagoryReducer;