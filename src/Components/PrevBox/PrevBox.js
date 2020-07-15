import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "./prevBox.css"
import { useEffect } from 'react'
const PrevBox = ({prevBox,dlt_prevBox}) => {

    var {id,imageUrl,compUrl} = prevBox;
    const [activeImage,setActiveImage] = useState(compUrl)
    const [blur,setBlur]=useState("");
    var imgLoader =(imageUrl) => setTimeout(()=>{
        setActiveImage(imageUrl)
        setBlur("un-blur")
    },300)
    useEffect(()=>{
        imgLoader(imageUrl);
    },[])
    useEffect(()=>{
        return ()=> clearTimeout(imgLoader)
     
    },[])
    return (
        <Col className="image-prev-box m-2">
        <FontAwesomeIcon icon={faTimes} className="dlt_img" onClick={()=>dlt_prevBox(id)}/>
        <img src={activeImage} className={`prevImg ${blur}`}  alt=""/>
      </Col>
    )
}

export default PrevBox
