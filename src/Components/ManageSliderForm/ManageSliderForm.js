import React, { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import { useEffect } from 'react';
import firebase from "../../firebase/firebase"
import { connect } from 'react-redux';
import { addNewItemInSlider , editSliderItem , deleteSliderItem} from '../../Redux/sliderReducer/sliderActions';

const ManageSliderForm = (props) => {
    var {sliderElement,addNewItemInSlider,editSliderItem,deleteSliderItem,...restProps} = props;
    const [image,setImageUrl]=useState();
    const [disabled,setDisabled] = useState(false)
    const [statusMsg,setStatusMsg] = useState({})


useEffect(()=>{
if(sliderElement){
    setImageUrl(sliderElement.imageUrl)
}
},[sliderElement])


var fileHandler = async (e)=>{
var fileQuery = e.target.files[0];
var fileRef = firebase.storage().ref(`slider_images/${fileQuery.name}`);
try {
    await fileRef.put(fileQuery)
 var fileUrl = await fileRef.getDownloadURL();
 setImageUrl(fileUrl)

} catch (error) {
    console.log(error.message)
}
}
var handleSubmit = async (e)=>{
    e.preventDefault();
    setDisabled(true);
    var status = null;
 if(sliderElement){
     status = await editSliderItem({imageUrl:image,id:sliderElement.id})
 }
 else{
    status = await addNewItemInSlider({imageUrl:image});
 }
    if(status === "success"){
        setStatusMsg({msg:"Successfull"})
    }
    else{
        setStatusMsg({error:status})
    }
    setDisabled(false)
  
}
 
    return (
        <div>
             <Modal
      {...restProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
      {
          sliderElement ? "CHANGE IMAGE":"ADD NEW IMAGE"
      }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Upload Image</Form.Label>
    <Form.Control onChange={fileHandler} type="file" accept=".jpg"/>
      <Form.Row>
          <Col md={4} className="mt-3" style={{height:"200px",border:"1px solid black"}}>
              <img src={image} alt="Not found" style={{width:"100%",height:"100%"}}/>
          </Col>
      </Form.Row>
      <Form.Row>
          {
              statusMsg.msg ?
          <p className="text-success">{statusMsg.msg}</p>
          :statusMsg.error ? <p className="text-danger">{statusMsg.error}</p>:""
          }
      </Form.Row>
  </Form.Group>

  <Button variant="primary" type="submit" disabled={disabled}>
          {
              sliderElement ? "UPDATE":"ADD"
          }
  </Button>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}
var actions = {
addNewItemInSlider,
editSliderItem,
deleteSliderItem
}
export default connect(null,actions)(ManageSliderForm)
