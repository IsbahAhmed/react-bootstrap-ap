import React, { useState } from 'react'
import OrderedItems from '../OrderedItems/OrderedItems'
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation'
import { countryNameFind } from '../../Utility'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { completeOrder } from '../../Redux/orders/ordersActions'
const OrdersListItem = ({order,count,completeOrder}) => {
    var {orderId,orderedItems,orderedBy,orderStatus,paymentMethod,shippingCost,shippingInfo,subtotal,confirmed=false} = order
    var {first_name,last_name,address,apt,country,email,orderedAt,phoneNo,postalCode} = shippingInfo;

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
    return (
        <>
       { orderStatus === "pending" && confirmed ? <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Complete order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to complete this order? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=> completeOrder({...order,orderStatus:"completed"})}>
        Complete order
          </Button>
        </Modal.Footer>
      </Modal>:""}
        <tr>
            
        <td>{count}</td>
    <td>{orderedAt.toDate().toISOString().split('T')[0]}</td>
    <td>{first_name}</td>
    <td>{last_name}</td>
    <td>{phoneNo}</td>
    <td>{email}</td>
    <td>{address}</td>
    <td>{apt}</td>
    <td>{postalCode}</td>
    <td>{countryNameFind(country)}</td>
    <td>{paymentMethod}</td>
        <td>
        
             <OrderedItems orderedItems={orderedItems}/>
        </td>
    <td>{shippingCost + subtotal}</td>
        <td>Null</td>
    <td>{shippingCost + subtotal}</td>
    <td>{orderStatus}</td>
        <td className="justify-content-between d-flex">
      <OrderConfirmation orderObj={order}/>
  
        </td>
       <td>{!confirmed && orderStatus !== "canceled" && orderStatus !== "completed" ? "First confirm order": confirmed && orderStatus !== "canceled" && orderStatus !== "completed" ?
      ( <Button variant="primary" onClick={handleShow}>Complete Order</Button>) :confirmed && orderStatus === "completed" ? "Order completed": orderStatus === "canceled" ? "Order canceled":""
       }</td> 
      </tr>
        </>
    )
}
var actions ={
    completeOrder
}
export default connect(null,actions)(OrdersListItem)
