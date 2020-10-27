import React from "react";
import { Container, Table } from "react-bootstrap";
import UsersList from "../../Components/UsersList/UsersList";

const AllUser = ({match:{params:{pagetype}}}) => {

  return (
    <Container className="p-5 bg-white mt-5" style={{ overflowX: "auto" }}>
              <h1>{
                pagetype === "new_users" ? "New users":"All users"
                
                }</h1>
      <Table striped bordered hover style={{ width: "150%" }}>

        <thead>
          <tr>
            <th>#</th>
            <th style={{width:"150px"}}>Joined At</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            
            <th style={{width:"400px"}}>Adddresses</th>
            <th>Number of orders</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
        <UsersList usersType={pagetype}/>
        </tbody>
      </Table>
    </Container>
  );
};

export default AllUser;
