import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import styled from 'styled-components'

const SignIn = () => {
    const FormStyle = styled.div`
    width:60%;
    height:60%;
    background:white;
    `
    return (
     <Container>
         <Row style={{height:"100vh"}}>
            <Col style={{height:"100%"}} className="bg-light d-flex justify-content-center align-items-center">
                <FormStyle className=" box-shadow">
                    <h1 className="text-center mt-2 " >Sign In</h1>
                    <Form className="m-5">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                </FormStyle>
            </Col>
         </Row>
     </Container>
    )
}

export default SignIn
