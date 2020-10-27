import React from 'react'


const NewsLetterListItem = ({sub,count}) => {


    return (
        <tr>
        <td>{count}</td>
    <td>{sub.email}</td>
  
      </tr>
    )
}

export default NewsLetterListItem
