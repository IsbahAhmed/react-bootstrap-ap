import React from 'react'
import PrevBox from '../PrevBox/PrevBox'
import { useState } from 'react'

const PrevBoxesList = ({prevBoxes,dlt_prevBox}) => {

    return (
     <>
    {
        prevBoxes ? 
         prevBoxes.map((prevBox)=><PrevBox key={prevBox.id} prevBox={prevBox} dlt_prevBox={dlt_prevBox}/>):""
    }
     </>
    )
}

export default PrevBoxesList
