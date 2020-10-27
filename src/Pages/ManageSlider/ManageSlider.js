import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SliderElements from '../../Components/SliderElements/SliderElements'
import AddNewBtn from '../../Components/AddnewBtn/AddNewBtn'
import ManageSliderForm from '../../Components/ManageSliderForm/ManageSliderForm'
import { connect } from 'react-redux'
import { fetchSliderItems } from '../../Redux/sliderReducer/sliderActions'
import { useEffect } from 'react'



const ManageSlider = ({slider,fetchSliderItems}) => {

    useEffect(()=>{
        if(!slider.length){
            fetchSliderItems()
        }
    },[slider])
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
          <Row>
          <ManageSliderForm show={modalShow} onHide={()=> setModalShow(false)}/>
              <Col lg="12">
               <SliderElements slider={slider}/>
              </Col>
          </Row>
          <AddNewBtn onClick={()=>setModalShow(true)}/>
        </div>
    )
}
var mapState = (state)=>({
    slider : state.slider
})
var actions = {
fetchSliderItems
}
export default connect(mapState,actions)(ManageSlider)
