import React from "react";
import { Container, Table, Row } from "react-bootstrap";
import UserAddresses from "../../Components/UserAddresses/UserAddresses";
import UserReviews from "../../Components/UserReviews/UserReviews";
const AllUser = () => {
  return (
    <Container className="p-5 bg-white mt-5" style={{ overflowX: "auto" }}>
      <Table striped bordered hover style={{ width: "150%" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Adddresses</th>
            <th>Number of orders</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>mark@gmail.com</td>
            <td>
              <Row>
                <UserAddresses />
              </Row>
            </td>
            <td>3</td>
            <td style={{width:"400px"}}> 
            <UserReviews/>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default AllUser;
