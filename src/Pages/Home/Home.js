import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faDollarSign,faUsers } from '@fortawesome/free-solid-svg-icons'
import {faTwitter,faFacebook} from "@fortawesome/free-brands-svg-icons"
import Graph from '../../Components/Graph/Graph'
import UserTable from '../../Components/Table/Table'
import Weather from '../../Components/Weather/Weather'
const Home = () => {
    var Styles = styled.div`
    .row > div{
        min-height:70px
    }
    .dabbe{
        background:white;
        
    }
    .dabbe > div{
        height:120px;
        background:#151515;
        color:white;
        -webkit-box-shadow: 0px 0px 30px -2px rgba(130,130,130,1);
-moz-box-shadow: 0px 0px 30px -2px rgba(130,130,130,1);
box-shadow: 0px 0px 30px -2px rgba(130,130,130,1);
i,svg{
    font-size:40px;
    opacity:0.7;
}
    }
    `

    return (
        <Styles>
           <Row className="d-flex justify-content-center dabbe">
          

            <Col lg="2" sm="4" xs="6" className="m-3 bg-warning">
           <Row className="">

              <Col className="d-flex justify-content-between align-items-center">
              Total Views
              <FontAwesomeIcon icon={faEye} />
              </Col>
           
           </Row>
           <Row>
               <Col>
               <h3>2500</h3>
               </Col>
           </Row>
            </Col>
            <Col lg="2" sm="4" xs="6" className="m-3 bg-success">
           <Row className="">

              <Col className="d-flex justify-content-between align-items-center">
              Total Revenue
             <FontAwesomeIcon icon={faDollarSign} />
              </Col>
           
           </Row>
           <Row>
               <Col>
               <h3>2500</h3>
               </Col>
           </Row>
            </Col>

            <Col lg="2" sm="4" xs="6" className="m-3 bg-danger">
           <Row className="">

              <Col className="d-flex justify-content-between align-items-center">
              Users Online
             <FontAwesomeIcon icon={faUsers} />
              </Col>
           
           </Row>
           <Row>
               <Col>
               <h3>2500</h3>
               </Col>
           </Row>
            </Col>
            <Col lg="2" sm="4" xs="6" className="m-3 bg-info">
           <Row className="">

              <Col className="d-flex justify-content-between align-items-center">
              Twitter Followers
             <FontAwesomeIcon icon={faTwitter} />
              </Col>
           
           </Row>
           <Row>
               <Col>
               <h3>2500</h3>
               </Col>
           </Row>
            </Col>
            <Col lg="2" sm="4" xs="6" className="m-3" style={{background:"#133185"}}>
           <Row className="">

              <Col className="d-flex justify-content-between align-items-center">
              Facebook Followers
             <FontAwesomeIcon icon={faFacebook} />
              </Col>
           
           </Row>
           <Row>
               <Col>
               <h3>2500</h3>
               </Col>
           </Row>
            </Col>

           </Row>

           <Graph/>
           <UserTable/>
           <Weather/>
        </Styles>
    )
}

export default Home
