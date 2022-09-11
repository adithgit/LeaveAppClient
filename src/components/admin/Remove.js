import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Api from '../../api/Api';
import qs from 'qs';
import './admin.css';

function Remove(props) {

  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post(`/admin/remove/${props.type}`, qs.stringify(data))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const handleChange = (e) => {
    const value = e.target.value;
    setData({ username: value });
    console.log(data);
  }

  return (
    <div className='add'>
    <div className="form-container">
    <Form onSubmit={handleSubmit}>
    <h3 style={{textAlign:'center'}}>Enter Details to Remove</h3>
      <Form.Group className="mb-3" onChange={handleChange} controlId="username">
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