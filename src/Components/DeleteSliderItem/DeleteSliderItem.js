import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import { deleteSliderItem } from '../../Redux/sliderReducer/sliderActions';

const DeleteSliderItem = ({deleteSliderItem,itemId}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
        <Button className="mt-3 btn-danger" onClick={handleShow}>Delete</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm action</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this image?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>{
              deleteSliderItem(itemId)
              handleClose()
          }}>
        Delete
          </Button>
          <Button variant="light" onClick={handleClose}>
        Cancel
          </Button>
        </Modal.Footer>
      </Modal>
        </React.Fragment>
    )
}
var actions = {
    deleteSliderItem
}
export default connect(null,actions)(DeleteSliderItem)
