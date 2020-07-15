import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
const OrderConfirmation = () => {
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
                title:"Confirm Delete?",
        body:"This will permanantly delete this order. User will get notified",
        btnValue:"Delete"
            })
        }
        setShow(true);
    }
  var {title,body,btnValue} = modalData;
    return (
        <React.Fragment>
              <Button variant="success" name="cfrm_order" onClick={handleShow}><FontAwesomeIcon style={{pointerEvents:"none"}} icon={faCheck} /></Button>
          <Button variant="danger" name="dlt_order" onClick={handleShow}><FontAwesomeIcon style={{pointerEvents:"none"}} icon={faTrash}/></Button>
         

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
    <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
    <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant={btnValue === "Confirm" ? "primary":"danger"} onClick={handleClose}>
            {btnValue}
          </Button>
        </Modal.Footer>
      </Modal>
        </React.Fragment>
    )
}

export default OrderConfirmation
