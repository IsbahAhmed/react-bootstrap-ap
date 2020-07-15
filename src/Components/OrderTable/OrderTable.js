import React from 'react'
import OrderedItems from '../../Components/OrderedItems/OrderedItems'
import OrderConfirmation from '../../Components/OrderConfirmation/OrderConfirmation'
import { Table } from 'react-bootstrap'
const OrderTable = () => {
    return (
        <Table striped bordered hover className="order-table mr-5">
        <thead>
          <tr style={{width:"500px"}}>
            <th>#</th>
            <th>Date</th>
            <th>First Name</th>
            <th>Last Name</th>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>25-june-2020</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>mark@gmail.com</td>
            <td>abcd groove street</td>
            <td>Raza Corner</td>
            <td>75270</td>
            <td>Karachi</td>
            <td>COD</td>
            <td>
              <OrderedItems />
            </td>
            <td>10,000</td>
            <td>5%</td>
            <td>8000</td>
            <td>Pending</td>
            <td className="justify-content-between d-flex">
          <OrderConfirmation orderId={"orderId"}/>
      
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>25-june-2020</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>mark@gmail.com</td>
            <td>abcd groove street</td>
            <td>Raza Corner</td>
            <td>75270</td>
            <td>Karachi</td>
            <td>COD</td>
            <td>
              <OrderedItems />
            </td>
            <td>10,000</td>
            <td>5%</td>
            <td>8000</td>
            <td>Shipped</td>
            <td className="justify-content-between d-flex">
          <OrderConfirmation orderId={"orderId"}/>
      
            </td>
          </tr>
       
        </tbody>
      </Table>
    )
}

export default OrderTable
