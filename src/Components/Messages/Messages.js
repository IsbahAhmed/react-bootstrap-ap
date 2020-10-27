import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchMessages } from "../../Redux/messages/messagesActions";
import { useEffect } from "react";
import MessagesListItem from "../MessagesListItem/MessagesListItem";


const Messages = ({messages,fetchMessages}) => {
useEffect(()=>{
if(!messages.length){

  fetchMessages()
}
},[])
var count = 0;
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
     {
       messages.map(msg => <MessagesListItem key={msg.msgId} msg={msg} count={++count}/>)
     }
      </tbody>
    </Table>
  );
};
var mapState = (state)=>({
  messages : state.messages
})
var actions = {
fetchMessages
}
export default connect(mapState,actions)(Messages);
