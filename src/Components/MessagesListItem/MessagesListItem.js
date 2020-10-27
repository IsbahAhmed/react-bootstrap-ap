import React from 'react'

const MessagesListItem = ({count,msg}) => {
    var {email,fullName,message,attachmentfileLink = "",createdAt} = msg;
    return (
        <tr>
        <td>{count}</td>
    <td>{fullName}</td>
    <td>{email}</td>
        <td>
        {message}
        </td>
        <td>
            {
                attachmentfileLink ? <a href={attachmentfileLink} className="text-primary" target="_blank">See file</a>: "Null"
            }
        </td>
      </tr>
    )
}

export default MessagesListItem
