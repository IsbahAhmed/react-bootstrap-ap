import React from 'react'
import { Col } from 'react-bootstrap'
import ProductListItem from '../ProductListItem/ProductListItem'

import { useEffect } from 'react'
import { connect } from 'react-redux'

const ProductsList = ({products}) => {

    return (
   <>
   {/* {products ? <ProductListItem/> : ()} */}
        {
            products ? 
            products.map((prod)=> <ProductListItem product={prod} key={prod.productId}/>)
            :
           ( <h1 className="text-center">No Products</h1>)
        }
   </>
    )
}

export default ProductsList
