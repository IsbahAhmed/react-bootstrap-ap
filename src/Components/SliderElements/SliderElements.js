import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import SliderElementListItem from '../SliderElementListItem/SliderElementListItem'

const SliderElements = ({slider}) => {
    return (
        <div>
            <Carousel>
            {
                slider.length ? slider.map((sliderElement)=>  
                <Carousel.Item key={sliderElement.id}>

                <SliderElementListItem sliderElement={sliderElement}/>
                </Carousel.Item>):"" 
            }

</Carousel>
        </div>
    )
}

export default SliderElements
