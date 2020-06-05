import React, { Component } from 'react'
import { Bar, Line, Radar, Pie } from 'react-chartjs-2'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

 class Graph extends Component {
     state = {
         chartData:{
            
                labels: ['Iphones', 'Laptops', 'Grocery', 'Weight Gainer', 'Graphic Cards', 'Mobile'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132,1)',
                        'rgba(54, 162, 235,1)',
                        'rgba(255, 206, 86,1)',
                        'rgba(75, 192, 192,1)',
                        'rgba(153, 102, 255,1)',
                        'rgba(255, 159, 64,1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            
         }
         ,
         options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
     }
      GraphStyle = styled.div`
     .two-graphs{
         canvas{
             height:250px !important;
         }
     }
     canvas{
   
     }
     `
    render() {
        var {chartData,options} = this.state
        return (
         <this.GraphStyle>
               <Container>
                  <Row >
                      <Col className="bg-white">
                      <Line
  data={chartData}
height=""
options={{
    title:{
        display:true,
        text:'Sales'
    },
    legend:{
        display:true,
        position:"right"
    }
}}
/>
                      </Col>
                      </Row>     
        <Row className=" justify-content-center align-items-center two-graphs" >
            <Col className="bg-white " md={5} sm={12}>
            <Radar
  data={chartData}
height=""
options={{
    title:{
        display:true,
        text:'Sales'
    },
    legend:{
        display:true,
        position:"right"
    }
}}
/>
            </Col>
            <Col className="bg-white m-3" md={6} sm={12} >
            <Pie
  data={chartData}
height=""
options={{
    title:{
        display:true,
        text:'Sales'
    },
    legend:{
        display:true,
        position:"right"
    }
}}
/>
            </Col>
            </Row>    
           </Container>
         </this.GraphStyle>
        )
    }
}

export default Graph

