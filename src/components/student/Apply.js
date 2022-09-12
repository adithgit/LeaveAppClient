import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Api from '../../api/Api';
import '../admin/admin.css';
import qs from 'qs';
import { Toast } from 'react-bootstrap';

function Apply(props) {
  const [data, setData] = useState(null);
  const [show, setShow]= useState({show:false});

  const toggleToast = () => {
    setShow(prev => { return {show:!prev.show}});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post(`/student/apply`, qs.stringify(data))
      .then(function (response) {
        console.log(response);
        if(response.status === 200){
          setShow({show:true, data:`Applied`, bg:'success'});
        }
      })
      .catch(function (error) {
        setShow({show:true, data:`Cannot apply`, bg:'danger'})
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
          <h3 style={{ textAlign: 'center' }}>Enter Leave Data</h3>
          
          <Form.Group className="mb-3" onChange={handleChange} controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter Subject" />
          </Form.Group>

          
          <Form.Group className="mb-3" onChange={handleChange} controlId="from">
            <Form.Label>From</Form.Label>
            <Form.Control type="Date" placeholder="Enter from" />
          </Form.Group>

          <Form.Group className="mb-3" onChange={handleChange} controlId="to">
            <Form.Label>To</Form.Label>
            <Form.Control type="Date" placeholder="Enter to" />
          </Form.Group>

          <Form.Group className="mb-3" onChange={handleChange} controlId="days">
            <Form.Label>Days</Form.Label>
            <Form.Control type="Number" placeholder="days" />
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

export default Apply