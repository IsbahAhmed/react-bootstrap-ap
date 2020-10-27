import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import { confirmOrder,cancelOrder } from '../../Redux/orders/ordersActions'
const OrderConfirmation = ({orderObj,confirmOrder,cancelOrder}) => {
    const [show, setShow] = useState(false);
    const [modalData,setModalData] = useState({
        title:"Confirm Order?",
        body:"This will send confirmation email to user"
    })
    const handleClose = () => setShow(false);
    const handleShow = (e) => {

        var btn = e.target.name;
        console.log(btn)
        if(btn === "cfrm_order"){
            setModalData({
                title:"Confirm Order?",
        body:"This will send confirmation email to user",
        btnValue:"Confirm"
            })
        }
        else{
            setModalData({
                title:"Confirm cancel?",
        body:"This will permanantly cancel this order. User will get notified",
        btnValue:"Cancel"
            })
        }
        setShow(true);
    }
    var handleConfirmation =async ()=>{
     await confirmOrder({...orderObj,confirmed:true});
     setShow(false)
    }
    var handleCancelation =()=>{
      cancelOrder({...orderObj,orderStatus:"canceled"}).then(()=>setShow(false))
    }
  var {title,body,btnValue} = modalData;
    return (
        <React.Fragment>
            {  !orderObj.confirmed && orderObj.orderStatus === "pending" ? <Button variant="success" name="cfrm_order" onClick={handleShow}><FontAwesomeIcon style={{pointerEvents:"none"}} icon={faCheck} /></Button>:""} 
         { (orderObj.orderStatus === "pending") && <Button variant="danger" name="dlt_order" onClick={handleShow}><FontAwesomeIcon style={{pointerEvents:"none"}} icon={faTimes}/></Button>}
         

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
    <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
    <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant={btnValue === "Confirm" ? "primary":"danger"} onClick={btnValue === "Confirm" ? handleConfirmation : handleCancelation}>
            {btnValue}
          </Button>
        </Modal.Footer>
      </Modal>
        </React.Fragment>
    )
}
var actions ={
confirmOrder,cancelOrder
}
export default connect(null,actions)(OrderConfirmation)
