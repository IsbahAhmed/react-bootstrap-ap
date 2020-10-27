import { firestore } from "../../firebase/firebase";
import { SET_ORDERS, CONFIRM_ORDER, CANCEL_ORDER, COMPLETE_ORDER } from "./ordersConstants";

export var fetchOrders = ()=>async (dispatch)=>{
    try{
        var orders = [];
        var ordersSnap = await firestore.collection('orders').get();
        ordersSnap.forEach(doc =>{
            orders.push({...doc.data(),orderId:doc.id});
        })
        dispatch({
            type:SET_ORDERS,
            payload:{
                orders
            }
        })
    }
    catch(error){
        console.log(error.message)
    }
}


export var confirmOrder = (orderObj)=>async(dispatch)=>{
    try {
        await firestore.collection('orders').doc(orderObj.orderId).set(orderObj);
        dispatch({
            type:CONFIRM_ORDER,
            payload:{
                orderObj
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}

export var cancelOrder = (orderObj)=>async(dispatch)=>{
    try {
        await firestore.collection('orders').doc(orderObj.orderId).set(orderObj);
        dispatch({
            type:CANCEL_ORDER,
            payload:{
                orderObj
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}
export var completeOrder = (orderObj)=>async(dispatch)=>{
    try {
        await firestore.collection('orders').doc(orderObj.orderId).set(orderObj);
        dispatch({
            type:COMPLETE_ORDER,
            payload:{
                orderObj
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}