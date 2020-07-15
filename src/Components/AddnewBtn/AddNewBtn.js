import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const AddNewBtn = (props) => {
  var {link,...restProps} = props
  var Style = styled.button`
    background: var(--green);
    width: 10rem;
    height: 3rem;
    position: fixed;
    right: 10%;
    color: white;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 18px;
    border-radius: 1.5rem;
    bottom: 10%;
    opacity: 0.7;
    border: none;
    outline: none;
    &:active {
      outline: none;
      border: none;
    }
    &:hover {
      opacity: 1;
    }
  `;
  return (
    <React.Fragment>
  {
    link ? (
      <Link to={link}>
      <Style {...restProps}>
       
          <FontAwesomeIcon icon={faPlus} /> Add New
      </Style>
        </Link>
    )
    :(
      <Style {...restProps}>
       
      <FontAwesomeIcon icon={faPlus} /> Add New
  </Style>
    )
  }
  </React.Fragment>
  );
};

export default AddNewBtn;
