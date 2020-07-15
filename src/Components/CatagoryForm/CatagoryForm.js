import React from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import firebase from '../../firebase/firebase'
import { useState } from 'react';
import { connect } from 'react-redux';
import { addnewcatagory, editCatagory,deleteCatagory } from '../../Redux/catagoryReducer/catagoryActions';
import {v4 as uuid} from "uuid"
const CatagoryForm = (props) => {
    var {mode,catBoxInfo={catagoryName:"",coverPhoto:""},addnewcatagory,editCatagory,deleteCatagory} = props;

    const [catForm,setCatForm]= useState({
        name:catBoxInfo.catagoryName,
        coverPhoto:catBoxInfo.coverPhoto
    })
    var [imageFile,setImageFile] = useState({});
    var imageUploader = async (e)=>{
      var img = e.target.files[0]
  var imgRef = firebase.storage().ref(`catagoryImages/${img.name}`);
  
 try {
  var query =  await imgRef.put(img)
  var imgpath = await imgRef.getDownloadURL();

  setCatForm((prevState)=>({
    ...prevState,
    coverPhoto:imgpath
  }))
 } catch (error) {
   console.log(error.message)
 }
    }
    var valuesHandler  = (e)=>{
      var {value,name} = e.target;
      setCatForm((prevState)=>({
        ...prevState,
        [name]:value
      }))
    }
    var handleSubmit = (e)=>{
      e.preventDefault();
      var {name,coverPhoto}=catForm;
      if(name,coverPhoto){
        var catObj = {
        catagoryName:name,coverPhoto
        }
       if(mode === "edit"){
     
        editCatagory(catObj,catBoxInfo.catId)
       }
       else{
        addnewcatagory(catObj)
       }
      }
      else{
        alert("Empty fields")
      }
    }

    //delete cat box

    var handleDelete = ()=>{
      deleteCatagory(catBoxInfo.catId)
    }
    var {name,coverPhoto} = catForm;
    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
      {mode === "edit" ? "Edit Catagory":"Add New Catagory"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Group controlId="formBasicEmail">
    <Form.Label>Name of catagory</Form.Label>
    <Form.Control placeholder="" value={name} onChange={valuesHandler} name="name"/>
  
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Upload cover photo</Form.Label>
    <Form.Control type="file" placeholder="" accept=".jpg" onChange={imageUploader}/>
  </Form.Group>
    <Row>
        <Col className="m-3" style={{height:"200px",border:"1px solid black"}}>
            <img src={coverPhoto} alt="" style={{width:"100%",height:"100%"}}/>
        </Col>
    </Row>
  <Button variant="primary" type="submit">
    Submit
  </Button>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
    {
      (mode === "edit") &&     <Button className="bg-danger mr-auto" type="button" onClick={handleDelete}>Delete</Button>
    }

          <Button className="bg-dark" onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
}
var actions = {
  addnewcatagory,
  editCatagory,
  deleteCatagory
}
export default connect(null,actions)(CatagoryForm)
