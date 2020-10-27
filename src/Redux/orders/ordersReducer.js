import { SET_ORDERS, CONFIRM_ORDER, CANCEL_ORDER, COMPLETE_ORDER } from "./ordersConstants";

var initialState = [];

var ordersReducer = (state = initialState,actions)=>{
    var {type,payload}=actions;
    switch(type){
        case SET_ORDERS:
            return payload.orders
        case CONFIRM_ORDER:
            var oldOrders = state.filter(({orderId})=> orderId !== payload.orderObj.orderId);
            return [...oldOrders,payload.orderObj]
         case CANCEL_ORDER:
            var oldOrders = state.filter(({orderId})=> orderId !== payload.orderObj.orderId);
            return [...oldOrders,payload.orderObj]
          case COMPLETE_ORDER:
            var oldOrders = state.filter(({orderId})=> orderId !== payload.orderObj.orderId);
            return [...oldOrders,payload.orderObj]
        default:
        return state
    }
}
export default ordersReducer