import React, { useEffect } from 'react'
import {Container, Row, Col, Table} from "react-bootstrap"
import ProductsList from '../../Components/ProductsList/ProductsList'
import AddNewBtn from '../../Components/AddnewBtn/AddNewBtn'

import { connect } from 'react-redux'


const Allproducts = ({products}) => {



    return (
      <Container fluid bg="white" className="all-products-container">
          <Row>
            <Col>
            <h1 className="text-center">ALL PRODUCTS</h1>
          <Row xs={2} md={3} lg={4} className="d-flex justify-content-center">
            <ProductsList products={products}/>
          </Row>
            </Col>
          </Row>
          <AddNewBtn link="/manage_products/crud_product/null"/>
      </Container>
    )
}
var mapState = (state)=>({
  products:state.products
})
var actions = {

}
export default connect(mapState,actions)(Allproducts)
