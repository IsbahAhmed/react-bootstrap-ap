import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap';
import SidebarListItem from '../SidebarListItem/SidebarListItem';
import { v4 as uuidv4 } from 'uuid';


class Sidebar extends Component {
    state={
        counter:0
     }
     
   colors = {
       blue:"#002e47",
       grey:"#444444"
   }
    SidebarStyle = styled.div`
   
    background:#161616;
    /* position:fixed; */
    min-height:100vh;
    height:auto;
    color:white;
    transition: all 300ms ease;
    ${ (props)=> props.sidebarActive  ? ("width:300px;"):("width:0px;")}
    .col{
        min-height:70px;
       
    }
    .row{
        margin-right:0px;
    }
    .logo{
        height:120px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .logo > div{
        width:100px;
        height:100px;
        border-radius:50%;
    }
    .menu-item{
        min-height:70px;
        max-height:min-content;
        display:flex;
        justify-content:center;
    
        flex-flow:column;
        cursor: pointer;
      
        margin:10px 0;
     h5{
       width:100%;
     
       padding:10px 0px 10px 20% !important;
       
     
       transition:background 300ms ease;
       &:hover{
        background:${this.colors.grey}

       }  
     }
    }
    
   
    `;
   arrayOfitems = [{
       head:"Dashboard",
       link:null,
    subMenu:[{
        name:"Home",
        link:"/"
    },
    {
        name:"Profile",
        link:"/dashboard/profile"
    },
    {
        name:"Layout",
        link:"/dashboard/layout"
    }]
   },
   {
    head:"Menu 2",
    link:null,
 subMenu:[{
     name:"Link 1",
     link:""
 },
 {
     name:"Link 2",
     link:""
 },
 {
     name:"Link 3",
     link:""
 }]
}
]
  



    
    render() {
    console.log(uuidv4());
        return (
           <this.SidebarStyle sidebarActive={this.props.sidebarActive}>
            <Row >
            <Col lg={12} className="logo mt-5">
                <div className="bg-light"></div>
            </Col>
                {this.arrayOfitems.map((item)=> <SidebarListItem key={uuidv4()} item={item}  />)}
         
            </Row>
           </this.SidebarStyle>
        )
    }
}

export default Sidebar
