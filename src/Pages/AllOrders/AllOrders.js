import React from 'react'
import {  Container, Col, Button } from 'react-bootstrap'
import "./AllOrders.css"
import OrderTable from '../../Components/OrderTable/OrderTable'


const AllOrders = () => {
    return (
  <Container className="bg-white py-5" style={{overflowX:"scroll",width:"max-content"}}>
      <h3>All Orders</h3>
     <OrderTable/>
  </Container>
    )
}

export default AllOrders
