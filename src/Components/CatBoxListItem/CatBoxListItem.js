import React from 'react'
import { Col } from 'react-bootstrap'

import "./CatBoxListItem.css"
import CatagoryForm from '../CatagoryForm/CatagoryForm'


const CatBoxListItem = ({catagory}) => {
var {catagoryName,coverPhoto,catId} = catagory
    const [modalShow, setModalShow] = React.useState(false);
 
    return (
   
        <React.Fragment>
                <Col 
            onClick={() => setModalShow(true)}
            className="cat-box mx-3 px-2 col-lg-3 col-sm-6 col-xs-12">
            <img src={coverPhoto} alt=""/>
    <h5 className="text-center">{catagoryName}</h5>
            
        </Col>
        <CatagoryForm
        mode="edit"
            catBoxInfo={catagory}
           show={modalShow}
           onHide={() => setModalShow(false)}
        />
  
        </React.Fragment>
    )
}

export default CatBoxListItem
