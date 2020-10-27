import React from 'react'
import {  Container, Col, Button } from 'react-bootstrap'
import "./AllOrders.css"
import OrderTable from '../../Components/OrderTable/OrderTable'


const AllOrders = ({match:{params:{pagetype}}}) => {
  const [heading,setHeading] = React.useState("All Orders");
  React.useEffect(()=>{
    switch (pagetype) {
      case "pending_orders":
        setHeading("Pending Orders")
        break;
    case "new_orders":
      setHeading("New Orders")
      break;
      case "completed_orders":
        setHeading("Completed Orders")
        break;
        case "cancelled_orders":
          setHeading("Cancelled Orders");
          break;
         
      default:
        setHeading("All Orders");

        break;
    }
  },[pagetype])
    return (
  <Container className="bg-white py-5" style={{overflowX:"scroll",width:"max-content"}}>
      <h3>{heading}</h3>
     <OrderTable ordersType={pagetype}/>
  </Container>
    )
}

export default AllOrders
