import React from 'react'
import ProductForm from '../../Components/ProductForm/ProductForm'
import { Container } from 'react-bootstrap'

const AddNewProduct = () => {
    return (
        <Container style={{background:"white"}} >
         <ProductForm/>
        </Container>
    )
}

export default AddNewProduct
