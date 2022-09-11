import React from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import './admin.css'
function Add(props) {
  return (
    <div className='add'>
    <div className="form-container">
    <Form>
    <h3 style={{textAlign:'center'}}>Enter {props.type} Data</h3>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="department">
        <Form.Label>Department</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
      <Button variant="primary" style={{marginLeft:'1vh'}} onClick={props.cancelHandle}>
        Cancel
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default Add