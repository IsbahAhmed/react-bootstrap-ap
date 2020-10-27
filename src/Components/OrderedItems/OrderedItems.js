import React from 'react'
import OrderedItemsListItem from '../OrderedItemsListItem/OrderedItemsListItem'

import {v4 as uuid} from "uuid"
const OrderedItems = ({orderedItems = []}) => {
 
    return (
        <div>
           {
               orderedItems.map(item => <OrderedItemsListItem item={item} key={uuid()}/> )
           }
           
        </div>
    )
}

export default OrderedItems
