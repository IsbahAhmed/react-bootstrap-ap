import React from 'react'
import { Col } from 'react-bootstrap'

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProduct } from '../../Redux/productsReducer/productActions';

const ProductListItem = ({product,deleteProduct}) => {
  var {name,imagesLinks,type,price,quantity,productId} = product;

    return (
      <Col style={{height:'400px'}} className="box-shadow m-4 p-0">
        <img style={{width:"100%",height:"60%",margin:"0 !important"}} className=" m-0" src={imagesLinks[0].org_link} alt=""/>
          <Col className="d-flex bg-white justify-content-between"> 
    <h5>{name}</h5>
    <p>{price}</p>

          </Col>
          <Col className="d-flex bg-white justify-content-between"> 
          <h5>Quantity</h5>
          <p>{quantity} pcs</p>

          </Col>
          <Col className="d-flex bg-white justify-content-between"> 
          <h5>Catagory</h5>
    <p>{type}</p>

          </Col>
          <Col className="d-flex bg-white justify-content-between"> 
          <Link to={`/manage_products/crud_product/${productId}`}><h5 className="text-success" style={{cursor:"pointer"}}>Edit</h5></Link>
         <h5 className="text-danger" 
         style={{cursor:"pointer"}}
         onClick={()=> deleteProduct(productId,imagesLinks)}
         >Delete</h5>

          </Col>
      </Col>
    )
}
var actions = {
  deleteProduct
}
export default connect(null,actions)(ProductListItem)
