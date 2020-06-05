import React from 'react'
import { Table, Container } from 'react-bootstrap'
import styled from 'styled-components'




const UserTable = () => {

const TableStyle = styled.div`
.container{
    border-radius:20px;
    
}
table{
    color:grey
}
`
    return (
       <TableStyle>
            <Container className="bg-white">
            <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Online Status</th>
      <th>Balance</th>
      <th>Reviews</th>
      <th>Country</th>
      <th>Address
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alex</td>
      <td className="text-success">Online</td>
      <td>$2300</td>
      <td>5 star</td>
      <td>Berlin</td>
      <td>23 Groove Street</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Martie</td>
      <td className="text-danger">Offline</td>
      <td>$2300</td>
      <td>5 star</td>
      <td>Berlin</td>
      <td>23 Groove Street</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Jack</td>
      <td className="text-success">Online</td>
      <td>$2300</td>
      <td>5 star</td>
      <td>Berlin</td>
      <td>23 Groove Street</td>
    </tr>
  </tbody>
</Table>
        </Container>
       </TableStyle>
    )
}

export default UserTable
