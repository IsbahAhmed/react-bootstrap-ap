import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
 class SidebarListItem extends Component {
state = {
    collapsed:true
}
colors = {
    blue:"#002e47",
    grey:"#444444",
    dark_grey:"#252525"
}
    navCollapse = styled.div`
    padding:0;
  background:${this.colors.dark_grey};
height:min-content;
   
  
     .nav-collapse{
   
  
     margin:0;
     padding:0;
        transition:all 300ms ease;
    }
     li{
        /* margin:10px 0; */

        list-style:none;
        padding:10px 70px;
       transition:background 300ms ease;
        /* border-radius:20px; */
        &:hover{
            background:${(this.colors.grey)}
            
        }
       
    }
    a{
          text-decoration:none;
          color:white;
     
      } 
    `

getSiblings = function (elem) {

	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = elem.parentNode.firstChild;

	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}

	return siblings;

};

    handleNavCollapse = (e)=>{
        var {collapsed} = this.state;

        collapsed = !collapsed;
        this.setState({
            collapsed
        })
        var siblings = this.getSiblings(e.target)
        var navCollapse = siblings[0]

    }
    render() {
        var {head,link,subMenu} = this.props.item;
        return (
            <Col lg={12}   className="menu-item px-0" >
            <h5 className="menu-name" onClick={
             this.handleNavCollapse
            }>{head}</h5>
            
         <this.navCollapse as='ul' collapsed={this.state.collapsed} className="nav-collapse">
        {subMenu.map((ele)=> <Link key={uuidv4()} to={ele.link}><li>{ele.name}</li></Link>)}
         </this.navCollapse>
         </Col>
        )
    }
}

export default SidebarListItem
