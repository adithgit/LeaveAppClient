import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Api from '../../api/Api';
import './admin.css';
import qs from 'qs';
import { Toast } from 'react-bootstrap';

function Add(props) {
  const [data, setData] = useState(null);
  const [show, setShow]= useState({show:false});

  const toggleToast = () => {
    setShow(prev => { return {show:!prev.show}});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post(`/admin/add/${props.type}`, qs.stringify(data))
      .then(function (response) {
        if(response.status === 200){
          setShow({show:true, data:`New ${props.type} created`, bg:'success'});
        }
      })
      .catch(function (error) {
        setShow({show:true, data:`Cannot create ${props.type}`, bg:'danger'})
      });
  }
  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setData({ ...data, [key]: value });
    console.log(data);
  }

  return (
    <div className='add' >
      <div className="form-container">
      <Toast bg={show.bg} style={{position:'absolute'}} show={show.show} syle={{color:'black'}} onClose={toggleToast}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Message</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body >{show.data}</Toast.Body>
        </Toast>
        <Form onSubmit={handleSubmit}>
          <h3 style={{ textAlign: 'center' }}>Enter {props.type} Data</h3>
          <Form.Group className="mb-3" onChange={handleChange} controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" onChange={handleChange} controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" onChange={handleChange} controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          {props.type === 'parent' ? '' :<Form.Group className="mb-3" onChange={handleChange} controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Control type="string" placeholder="Enter department" />
          </Form.Group>}

          {props.type === 'student' ?
            <Form.Group className="mb-3" onChange={handleChange} controlId="semester">
              <Form.Label>Semester</Form.Label>
              <Form.Control type="string" placeholder="Enter semester" />
            </Form.Group> : ''}

{/* 
          {props.type === 'parent' ?
            <Form.Group className="mb-3" onChange={handleChange} controlId="student">
              <Form.Label>Student Username</Form.Label>
              <Form.Control type="string" placeholder="Enter username" />
            </Form.Group> : ''} */}

          <Form.Group className="mb-3" onChange={handleChange} controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control type="string" placeholder="Enter image url" />
          </Form.Group>

          <Button variant="success" type="submit" >
            Submit
          </Button>
          <Button variant="primary" style={{ marginLeft: '1vh' }} onClick={props.cancelHandle}>
            Cancel
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Add