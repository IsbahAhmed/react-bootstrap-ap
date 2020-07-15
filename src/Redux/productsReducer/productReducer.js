import { SET_PRODUCTS, ADD_PRODUCTS, EDIT_PRODUCT, DLT_PRODUCT } from "./productsConstants";


var initialState = [];

var productReducer = (state = initialState,actions)=>{
    var {payload,type} = actions;
 switch (type) {
   
    case SET_PRODUCTS:
        return [...payload.products]
      case ADD_PRODUCTS:
         return [...state,payload.productObj]  
         case EDIT_PRODUCT:
            var filteredState = state.filter((prod)=> prod.productId !== payload.productId);
            return [...filteredState,payload.productObj]
          case DLT_PRODUCT:
            var filteredState = state.filter((prod)=> prod.productId !== payload.productId);
            return [...filteredState]
     default:
       return state
 }
}
export default productReducer;