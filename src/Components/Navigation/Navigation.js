import React from 'react'
import {Navbar,Form,Button,Nav,NavDropdown,FormControl, Dropdown} from "react-bootstrap"
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Styles = styled.div`
.navbar{
    width:100%;
    background:#00a5f1
}
.navbar-brand{
  color:white
}
.toggle-btn{
  background:transparent;
  border:none;
  &:active,&:focus{
border:none;
box-shadow:none;
outline:none;

  }
font-size:20px
}
.navbar-nav,svg{
  color:white;
  .btn-primary svg:hover{
    opacity:0.5
  }
  .nav-link svg:hover{
    opacity:0.5

  }
  svg{
    transition:all 300ms ease
  }
}
a{
  text-decoration:none;
  color:inherit;
}
.dropdown-toggle.btn-primary.btn{
&:active,&:focus{
  outline:none;
  box-shadow:none
}
&:hover{
  opacity:0.7
}
    background:transparent; 
  color:inherit;
  border-color:transparent;
  svg{
    fill:black
  }

}
`;
const Navigation = (props) => {

  var {handleSideBarToggler,sideBarActive} = props
    return (
        <Styles>

             <Navbar expand="lg">
      <Button className="mr-3" className="toggle-btn" onClick={()=>{handleSideBarToggler(sideBarActive)}}>	&#9776;</Button>   
     
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className=" ml-auto">
    <Link className="nav-link" to="/">
      <FontAwesomeIcon icon={faHome}/>
    </Link>
    <Link className="nav-link" to="/">
    <FontAwesomeIcon   icon={faEnvelope}/>
    </Link>
    <Dropdown>
  <Dropdown.Toggle  id="dropdown-basic">
   <FontAwesomeIcon icon={faCog}/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </Styles>
    )
}

export default Navigation
