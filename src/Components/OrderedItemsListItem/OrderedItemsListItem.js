import React from 'react'
import { Col } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react';
import { findProduct } from '../../Utility';
import { connect } from 'react-redux';
const OrderedItemsListItem = ({item={},products=[]}) => {
     const [orderedItemInfo,setorderedItemInfo] = useState({});
    useEffect(()=>{
       var product = findProduct(item.productId,products);
       setorderedItemInfo({...item,productInfo:{...product}})
       console.log(orderedItemInfo)
    },[item])

    var {quantity,selectedColors=[],productInfo={}} = orderedItemInfo;
var {name,price} = productInfo;
    return (
        <Col md={12} className="d-flex justify-content-between">
        <h5>{`${quantity} ${name}`} </h5>
      
    <p>{selectedColors[0]}</p>
    <p>{price}</p>
      </Col>

    )
}
var mapState = (state)=>({
  products:state.products
})
export default connect(mapState)(OrderedItemsListItem)
