import React, { useState } from 'react'
import './admin.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Api from '../../api/Api';
import qs from 'qs';

function Login() {
    const [adminKey, setadminKey] = useState();

    let toggleState = (e) => {
        if (e.target.value === 'signIn') {
            setadminKey(null);
        } else {
            setadminKey(signUp);
        }
    }

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    let handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setFormData({ ...formData, [key]: value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        const action = adminKey == null ? "login" : "register";
        console.log(formData + action);
        Api.post(`/admin/${action}`, qs.stringify(formData))
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const signUp =
        <>
            <Form.Group className="mb-3" controlId="name" onChange={handleChange} >
                <Form.Label>Enter name</Form.Label>
                <Form.Control required type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="adminKey" onChange={handleChange} >
                <Form.Label>Admin key</Form.Label>
                <Form.Control required type="password" placeholder="Key" />
            </Form.Group>
        </>


    return (
        <div className='admin-login'>
            <div className='logo-container'>
                <img src="adminlogin.png" alt="" />
            </div>
            <div className='admin-container'>
                <div className="admin-wrap">
                    <ToggleButtonGroup type="radio"  name="options" style={{ width: '100%', marginBottom: '2vh' }} defaultValue={'signIn'}>
                        <ToggleButton id="tbg-radio-1" value={'signIn'}  onChange={toggleState}>
                            Sign-in
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-2" value={'signUp'} onChange={toggleState}>
                            Sign-up
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <br />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username" onChange={handleChange} >
                            <Form.Label>Username</Form.Label>
                            <Form.Control required type="text" placeholder="Enter username" />
                            <Form.Text className="text-muted">
                                We'll never share your data with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password" onChange={handleChange} >
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" />
                        </Form.Group>
                        {adminKey}
                        <Button variant="primary" style={{ width: '100%' }} type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login