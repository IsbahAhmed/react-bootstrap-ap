import React from 'react'
import ManageSliderForm from '../ManageSliderForm/ManageSliderForm'
import { Carousel, Button } from 'react-bootstrap';
import DeleteSliderItem from '../DeleteSliderItem/DeleteSliderItem';


const SliderElementListItem = ({sliderElement}) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
              <ManageSliderForm show={modalShow} sliderElement={sliderElement} onHide={()=> setModalShow(false)}/>
         
  
    <img
      className="d-block w-100"
      src={sliderElement.imageUrl}
      alt="First slide"
      style={{width:"100%",height:"40vw"}}
    />
    <Carousel.Caption>
        <Button onClick={()=> setModalShow(true)}>Edit</Button>
        <br/>
        <DeleteSliderItem itemId={sliderElement.id}/>
    </Carousel.Caption>

        </div>
    )
}

export default SliderElementListItem
