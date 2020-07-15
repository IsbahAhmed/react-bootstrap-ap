import React from 'react'
import CatBoxListItem from '../CatBoxListItem/CatBoxListItem'
import { useEffect } from 'react'
import { connect } from 'react-redux'



const CatBoxList = ({catagories}) => {
 
    return (
        <React.Fragment>
           {
               catagories ? catagories.map((cat)=> <CatBoxListItem key={cat.catId} catagory={cat}/>)
               : (<h1>Not Found</h1>)
           }
        </React.Fragment>
    )
}
var mapState = (state)=>({
    catagories:state.catagories
})

export default connect(mapState,null)(CatBoxList)