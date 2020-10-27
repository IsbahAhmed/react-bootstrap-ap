import React, { useState } from 'react'
import { Col, Button } from 'react-bootstrap'
import ProductListItem from '../ProductListItem/ProductListItem'

import { useEffect } from 'react'


const ProductsList = ({products}) => {
    const [productToShow, setProductToShow] = useState([]);
    const [productsArray, setProductsArray] = useState([]);
    const [productsLimit, setProductLimit] = useState(false);
  
    var productPoper = () => {
      var array = [];
      for (let i = 3; i > 0; i--) {
   
        var x = productsArray.pop();
   
        if (x) {
          array.push(x);
        } else {
          setProductLimit(true);
          break;
        }
      }
  
      setProductToShow((prevValue) => [...prevValue, ...array]);
    };
  
    useEffect(() => {
      //Component did mount
    //   var catagorizedProducts = ()=>{
    //   if(catagory === "all"){
    //     return [...products]
    //   }
    //   else{
    //     return products.filter(({type})=> catagory === type)
    //   }
    //   }
      
      setProductsArray([...products]);
    }, [products]);
  
    useEffect(() => {
      if (productsArray.length) {
        productPoper();
      }
    }, [productsArray]);
    return (
   <>
  
        {
            products.length ? 
            productToShow.map((prod)=> <ProductListItem product={prod} key={prod.productId}/>)
            :
           ( <h1 className="text-center">No Products</h1>)
        }
           {!productsLimit && products.length ? (
         <Button primary onClick={productPoper}>SHOW MORE</Button>
        ) : !products.length ? <p>Loading...</p>: (
          <p>No more to show</p>
        )}
   </>
    )
}

export default ProductsList
