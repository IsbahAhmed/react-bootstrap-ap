import React from 'react'
import { Col } from 'react-bootstrap'

const OrderedItemsListItem = () => {
    return (
        <Col md={12} className="d-flex justify-content-between">
        <h5>3 Name </h5>
        <p>Black</p>
        <p>4500</p>
      </Col>
    )
}

export default OrderedItemsListItem
