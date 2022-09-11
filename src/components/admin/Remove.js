import React from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import './admin.css'
function Remove(props) {
  return (
    <div className='add'>
    <div className="form-container">
    <Form>
    <h3 style={{textAlign:'center'}}>Enter Details to Remove</h3>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Button variant="danger" type="submit">
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

export default Remove