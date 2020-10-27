import React from 'react'
import UserAddresses from '../UserAddresses/UserAddresses'
import { Row } from 'react-bootstrap'
import UserReviews from '../UserReviews/UserReviews'

const UsersListItem = ({userObj,count}) => {
    var {firstName,lastName,email,createdAt,address,addressList} = userObj

    return (
      <React.Fragment>
            <tr>
    <td>{count}</td>
    <td>{createdAt.toDate().toISOString().split('T')[0]}</td>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
            <td>
              <Row>
                <UserAddresses addressList={addressList}/>
              </Row>
            </td>
            <td>3</td>
            <td style={{width:"400px"}}> 
            <UserReviews/>
            </td>
          </tr>
      </React.Fragment>
    )
}

export default UsersListItem
