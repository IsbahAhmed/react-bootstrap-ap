import React from 'react'

import { Table } from 'react-bootstrap'
import OrdersList from '../OrdersList/OrdersList'
import { withRouter } from 'react-router-dom'
const OrderTable = ({ordersType}) => {
    return (
        <Table striped bordered hover className="order-table mr-5">
        <thead>
          <tr style={{width:"500px"}}>
            <th>#</th>
            <th>Date</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No.</th>
            <th>Email</th>
            <th>Address</th>
            <th>Apt</th>
            <th>Postal Code</th>
            <th>City</th>
            <th>Payment Method</th>
          <th>Items</th>
          <th>Total Price</th>
          <th>Discount</th>
          <th>Final Price</th>
          <th>Status</th>
          <th>Confirmation</th>
          <th>Completed</th>
          </tr>
        </thead>
        <tbody>
      <OrdersList ordersType={ordersType}/>
        </tbody>
      </Table>
    )
}

export default withRouter(OrderTable)
