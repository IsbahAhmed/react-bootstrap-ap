import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "./ManageCatagories.css"
import CatBoxList from '../../Components/CatBoxList/CatBoxList'
import AddNewCatagory from '../../Components/AddNewCatagory/AddNewCatagory'
const ManageCatagories = () => {
    return (
        <Row  >
           <Col className="bg-white col-lg-12" style={{height:"500px",marginTop:"50px"}}>
      <Row className="d-flex justify-content-center">
      <CatBoxList/>
      <AddNewCatagory/>
      </Row>
           </Col>
        </Row>
    )
}

export default ManageCatagories
