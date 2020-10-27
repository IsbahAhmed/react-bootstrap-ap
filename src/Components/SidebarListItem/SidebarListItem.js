import React, {  useState } from "react";
import { Col, Collapse } from "react-bootstrap";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./SideBarListItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarListItem = (props) => {
  var { head, link, subMenu,icon } = props.item;
  var [collapsed, setCollpsed] = useState("true");
  const [open, setOpen] = useState(false);
  var colors = {
    blue: "#002e47",
    grey: "#444444",
    dark_grey: "#252525",
  };
  var NavCollapse = styled.div`
    padding: 0;
    background: ${colors.dark_grey};

    transition-property:height;
    transition-duration:300ms;
    -webkit-transition: all 300ms ease;
      overflow-y:hidden;
      /* height:${({collapsed})=> collapsed=== "true" ? "0":collapsed === "false"?"min-content":""}; */

    li {
      /* margin:10px 0; */
   
      list-style: none;
      padding: 10px 70px;
      transition: background 300ms ease;
      /* border-radius:20px; */
      &:hover {
        background: ${colors.grey};
      }
    }
    .menu-name{
   
       
    }
    a {
      text-decoration: none;
      color: white;
    }
  `;
var navCollapser = ()=>{
   if(collapsed === "true"){
       setCollpsed("false")
   }
   else if(collapsed === "false"){
       setCollpsed("true")
   }
}
var history = useHistory()

var gotoLink = (link)=>{
  history.push(link)
}
  return (
    <Col lg={12} className="menu-item px-0" onClick={(link) ? ()=> gotoLink(link):()=>{console.clear()}}>
    
    
    <h5 className="menu-name " 
    onClick={() => setOpen(!open)}
    aria-controls="collapse-nav"
    aria-expanded={open}
    
    ><FontAwesomeIcon style={{paddingRight:"5px"}} icon={icon}/>  {head}</h5>

    <Collapse in={open}>
    <div id="collapse-nav">
    <NavCollapse as="ul"  className={`nav-collapse my-0`}>
        {subMenu.map((ele) => (
          <Link key={uuidv4()} to={ele.link}>
         <li >{ele.name}</li>
          </Link>
        ))}
      </NavCollapse>
    </div>
    </Collapse>
    </Col>
  );
};

export default SidebarListItem;
