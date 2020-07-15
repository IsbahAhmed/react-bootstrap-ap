import React, { useState,useEffect } from "react";
import { Form, Col, Button, Row, Spinner } from "react-bootstrap";
import "./ProductForm.css";

import firebase from '../../firebase/firebase'
import { keepTrying } from "../../Utility";
import PrevBoxesList from "../PrevBoxesList/PrevBoxesList";
import {v4 as uuid} from "uuid"
import { connect } from "react-redux";
import {addNewProduct,editProduct,deleteProduct} from "../../Redux/productsReducer/productActions";
import { withRouter, useHistory } from "react-router-dom";

const ProductForm = (props) => {

const history = useHistory()
  var {addNewProduct,editProduct,deleteProduct,catagories,products,match:{params:{productId}}} = props;
  const [colors, setColors] = useState({
    red: false,
    blue: false,
    yellow: false,
    green: false,
    black: false,
  });
const [disabled,setDisabled] = useState({
  fileInput:false,
  submitBtn:false
})
var valuesSetter = (productId)=>{

  if(products.length > 0){
   
  var desiredProduct = products.filter((prod)=> prod.productId === productId)
  
desiredProduct = desiredProduct[0]
var {
  name,
  type,
  price,
  description,
  quantity,
  selectedColors,
  imagesLinks
} = desiredProduct;
setFormValues((prevState)=>({
  ...prevState,
  name,
  type,
  price,
  description,
  quantity,
  selectedColors,
  imagesLinks
}))
selectedColors.forEach((color)=>{
  setColors((prevValue)=>({
    ...prevValue,
    [color]:true
  }))

})
console.log(colors)
}
}
useEffect(()=>{
///setting values to be edited
if(productId !=="null"){
  
  valuesSetter(productId)
}
},[products])
  const [formValues, setFormValues] = useState({
    name: "",
    type: "Glasses",
    selectedColors: [],
    price: "",
    quantity: 1,
    description: "",
    imageFiles: [],
    imagesLinks:[],
    prevBoxes:[]

  });


 



  var valuesHandler = (e) => {
    var { name, value } = e.target;
    setFormValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  
  
  var colorSelector = (e) => {
    var { name, checked } = e.target;
    console.log(checked)
    setColors(
      (prevValue) => ({
        ...prevValue,
        [name]: checked,
      })
      
      );
    };
///seting images into state
    var image_uploader = (e) => {
    
    var imageFiles = e.target.files
    setFormValues((prevValue)=>({
      ...prevValue,
      imageFiles:[...imageFiles]
    }))
  };
var uploader = (imageArr)=>{
imageArr.forEach( async (img)=>{

  var imgName = img.name.substring(0,img.name.length-4)

  var imgRef = firebase.storage().ref(`product_images/${img.name}`);
  setDisabled((prevState)=>({
    ...prevState,
    fileInput:true
  }))
  var query =  await imgRef.put(img)
 var imgpath = await imgRef.getDownloadURL();


 var comp_imgRef = firebase.storage().ref().child(`product_images/${imgName}_100x100.jpg`);
 var comp_url=""
 await keepTrying(10, comp_imgRef).then((url) => {console.log(url)
 comp_url=url;}
 )

  setDisabled((prevState)=>({
    ...prevState,
    fileInput:false
  }))
 
  //set images link in state
  var imgObj = {
    id:uuid(),
    org_link:imgpath,
    comp_url
  }
  setFormValues((prevState)=>({
    ...prevState,
    imagesLinks:[...prevState.imagesLinks,imgObj]
  }))
})
}
//seting up preview
var prevBoxesGenerator = (imagesLinks)=>{
  var boxArr = [];
  imagesLinks.forEach((ele)=>{
    boxArr.push({id:ele.id,imageUrl:ele.org_link,compUrl:ele.comp_url})
  })
  setFormValues((prevState)=>({
    ...prevState,
    prevBoxes:[...boxArr]
  }))
}
useEffect(()=>{
if(formValues.imagesLinks){

  prevBoxesGenerator(formValues.imagesLinks)
}
},[formValues.imagesLinks])

///

  useEffect(()=>{
    
    if(formValues.imageFiles){
    uploader(formValues.imageFiles)
    }
      },[formValues.imageFiles])
      ///////

///delete preview boxes
var dlt_prevBox=(boxId)=>{
var filterPrevboxes = formValues.
imagesLinks.filter((ele)=> ele.id !== boxId)
  setFormValues((prevState)=>({
    ...prevState,
    imagesLinks:[...filterPrevboxes]
  }))
}
var colorsAdder = ()=>{
  var {  red,
    blue,
    yellow,
    green,
    black}= colors;
    
    var selectedColors = []
    if(red){
      selectedColors.push("red");

    }
    if(blue){
      selectedColors.push("blue")
    }
    if(yellow){
      selectedColors.push("yellow")
    }
    if(green){
      selectedColors.push("green")
    }
    if(black){
      selectedColors.push("black")
    }
    return selectedColors
}
//submit form
var handleSubmit = (e)=>{
e.preventDefault();

var {
  name,
  type,
  price,
  description,
  quantity,
  
  imagesLinks
} = formValues
var selectedColors = colorsAdder()

if(name&&type&&price&&description&&quantity&&selectedColors.length>0&&imagesLinks.length>0){
var productObj = {
  name,
  type,
  price,
  description,
  quantity,
  selectedColors,
  imagesLinks
}
if(productId !== "null"){
  editProduct(productObj,productId)

alert("Updated")
}
else{
  addNewProduct(productObj)

alert("Added")
}
}
else{

  alert("empty fields")
}

}


  var {
    name,
    type,
    price,
    description,
    quantity,
    imagesLinks,
    selectedColors,
    prevBoxes
  } = formValues;
  var {red,blue,yellow,green ,black}=colors
  return (
    <Form className="mt-5 p-5" onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={valuesHandler}
            placeholder=""
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Product Type</Form.Label>
          <Form.Control
            selected={type}
            name="type"
            value={type}
            onChange={valuesHandler}
            as="select"
          >
        {
          catagories ? catagories.map((cat)=> <option key={cat.catId} value={cat.catagoryName}>{cat.catagoryName}</option>)
          : ""
        }
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Select Colors</Form.Label>
        {["checkbox"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="red"
              type={type}
              id={`inline-${type}-1`}
              name="red"
              checked={red}
              onClick={colorSelector}
              onChange={()=>{}}
            />
            <Form.Check
              inline
              label="blue"
              type={type}
              id={`inline-${type}-1`}
              name="blue"
              checked={blue}
              onClick={colorSelector}
              onChange={()=>{}}
            />
            <Form.Check
              inline
              label="yellow"
              type={type}
              id={`inline-${type}-1`}
              name="yellow"
              checked={yellow}
              onClick={colorSelector}
              onChange={()=>{}}
            />
            <Form.Check
              inline
              label="green"
              type={type}
              id={`inline-${type}-1`}
              name="green"
              checked={green}
              onClick={colorSelector}
              onChange={()=>{}}
            />
            <Form.Check
              inline
              label="black"
              type={type}
              id={`inline-${type}-1`}
              name="black"
              checked={black}
              onClick={colorSelector}
              onChange={()=>{}}
            />
          </div>
        ))}
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            min="0"
            value={price}
            onChange={valuesHandler}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            min="1"
            value={quantity}
            onChange={valuesHandler}
          />
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          name="description"
          value={description}
          onChange={valuesHandler}
        />
      </Form.Group>
      <Form.Group>
        <Form.File
          id=""
          label="Upload Images"
          multiple
          onChange={image_uploader}
          accept=".jpg"
          disabled={disabled.fileInput}
        />

        <Form.Label className="text-success">
          Press Ctrl to select multiple files while selecting images
        </Form.Label>
      </Form.Group>
      <Row lg={4}>
          <PrevBoxesList prevBoxes={prevBoxes} dlt_prevBox={dlt_prevBox}/>
      
      </Row>
      <Button variant="primary" type="submit" disabled={disabled.submitBtn}>
         {
           disabled.submitBtn ? 
           <Spinner animation="border" />
           : "Submit"
         }
      </Button>
      {
        (productId !== "null") &&  <Button variant="danger" className="ml-5" type="button"  onClick={()=> 
        {
         deleteProduct(productId,imagesLinks)
          history.goBack()
          }}>
        Delete
      </Button> 
      }
    </Form>
  );
};

var mapState = (state)=>({
  catagories:state.catagories,
  products:state.products
})
var actions = 
{
  addNewProduct,
  editProduct,
  deleteProduct
}
export default connect(mapState,actions)(withRouter(ProductForm));
