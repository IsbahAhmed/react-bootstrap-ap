import React from "react";
import { Table } from "react-bootstrap";
const Messages = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
          <th>Attachment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Mark@gmail.com</td>
          <td>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quod
            quia aliquid dignissimos veniam iure suscipit. Doloribus soluta non
            culpa consequatur eius sequi est possimus. At porro facilis laborum
            necessitatibus.
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Messages;
