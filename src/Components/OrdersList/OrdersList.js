import React from 'react'
import OrdersListItem from '../OrdersListItem/OrdersListItem'
import { connect } from 'react-redux'
import { fetchOrders } from '../../Redux/orders/ordersActions'
import { useEffect } from 'react'
import { useState } from 'react'

const OrdersList = ({orders,fetchOrders,ordersType}) => {
    const [ordersToShow,setOrdersToShow]=useState([]);
 
    useEffect(()=>{
        if(!orders.length){
          
            fetchOrders();
        }
      
     
    },[orders])
    var newOrdersPoper = (orders)=>{
        var tempArr = [];
        var date_oneWeekBefore = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      orders.forEach((order)=> {
           var date = new Date(order.shippingInfo.orderedAt.toDate().toISOString().split('T')[0]);
        if(date.getTime() >= date_oneWeekBefore.getTime()){
            tempArr.push(order)
        }
       } )
    return tempArr
    }
 useEffect(()=>{
if(orders.length){
    switch (ordersType) {
        case "pending_orders":
            var tempArr = orders.filter(({orderStatus})=> orderStatus === "pending")
            setOrdersToShow([...tempArr])
            break;
    case "cancelled_orders":
        var tempArr = orders.filter(({orderStatus})=> orderStatus === "canceled")
        setOrdersToShow([...tempArr])
        break;
      case "completed_orders":
        var tempArr = orders.filter(({orderStatus})=> orderStatus === "completed")
        setOrdersToShow([...tempArr])
          break;  
        case "new_orders":
            setOrdersToShow([...newOrdersPoper(orders)])  
            break;
        default:
            setOrdersToShow([...orders])
            break;
    }
}
 },[ordersType,orders])
var count = 1;
    return (
      <React.Fragment>
          {
              ordersToShow.length ? ordersToShow.map(order =>
               
                <OrdersListItem order={order} count={count++} key={order.orderId}/>
              ):
              <h1>No orders found</h1>
          }
      </React.Fragment>
    )
}
var mapState = (state)=>({
    orders : state.orders
})
var actions = {
fetchOrders
}
export default connect(mapState,actions)(OrdersList)
