import React, { useState } from 'react'
import './common.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from '../api/Api';
import qs from 'qs';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, Toast } from 'react-bootstrap';
import { useEffect } from 'react';

function UserLogin(props) {

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('userdata'))){
      navigate('/home')
    }
  })

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

 
  const navigate = useNavigate();

  const [user, setUser] = useState('student');
  const [show, setShow] = useState(false)

  const toggleToast = () => {
    setShow(!show);
  }

  let changeUser = (e) => {
    setUser(e);
  }

  let handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setFormData(formData => { return { ...formData, [key]: value } });
    console.log(formData);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    e.target.lastChild.innerText = "Please Wait..";
    Api.post(`/${user}/login`, qs.stringify(formData))
      .then(function (response) {
        console.log(response.data.data);
        localStorage.setItem('userdata',JSON.stringify(response.data.data));
        navigate('/home');
      })
      .catch(function (error) {
        e.target.lastChild.innerText = "Login";
        toggleToast();
        console.log(error);
      });
  }

  return (
    <div className='admin-login'>
      <ToastContainer className="p-3" position={'middle-center'}>
        <Toast show={show} onClose={toggleToast}>
          <Toast.Header >
            <strong className="me-auto">Message</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Invalid Credentials</Toast.Body>
        </Toast>
      </ToastContainer>
      <div className='logo-container'>
        <img src={'/' + user + '.png'} alt="" />
      </div>
      <div className='admin-container'>
        <div className="admin-wrap">
          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Form.Group className="mb-3" controlId="username"  >
              <Form.Label>Username</Form.Label>
              <Form.Control required type="text" placeholder="Enter username" />
              <Form.Text className="text-muted">
                We'll never share your data with anyone else.
              </Form.Text>
            </Form.Group>
            <ToggleButtonGroup style={{ width: '100%', marginBottom: '2vh' }} onChange={changeUser} type="radio" name="options" defaultValue={['student']}>
              <ToggleButton id="student" value={'student'}>
                Student
              </ToggleButton>
              <ToggleButton id="parent" value={'parent'}>
                Parent
              </ToggleButton>
              <ToggleButton id="hod" value={'hod'}>
                Hod
              </ToggleButton>
            </ToggleButtonGroup>
            <Form.Group className="mb-3" controlId="password"  >
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" style={{ width: '100%' }} type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default UserLogin